###
### must have the following commandline tools:
###
### itstool  (Debian package: itstool)
### msgfmt   (Debian package: gettext)
### msgmerge (Debian package: gettext)	
### xmlto    (Debian package: xmlto)
### xmllint  (Debian package: libxml2-utils)
###

MANUAL_MASTER = manual.docbook
TUTORIAL_MASTER = tutorial.docbook

XMLTO_OPTS = --stringparam section.autolabel=1 \
	--stringparam use.is.as.filename=1 \
	--stringparam toc.max.depth=3 \
	--stringparam xref.with.number.and.title=0 \
	--stringparam section.label.includes.component.label=1 \
	--stringparam admon.graphics.extension=.svg \
	--stringparam admon.graphics=1 \
	--stringparam admon.style="'margin-left: 5%;'" \
	--stringparam ulink.target="_blank"

ITSTOOL = itstool
MSGMERGE = msgmerge
MSGFMT = msgfmt
XMLTO = xmlto
XMLLINT = xmllint

all: manual.pot manual_en.html tutorial.pot tutorial_en.html tutorial_fr.html tutorial_it.html clean_auxiliaries

clean_auxiliaries:
	-rm -f *.mo *_validated *.dbk *.bak

clean: clean_auxiliaries
	-rm -rf *.html manual_*_chunked/ tutorial_*_chunked/

# Derive language from filename (and extension)
define LANGUAGE =
$$(echo -n $(1) | sed 's/.*_\(..\)\.$(2)/\1/')
endef

%.html: %.dbk %.dbk_validated
	sed -i "s%generated_en/%generated_$(call LANGUAGE,$<,dbk)/%g" $<
	LL=$(call LANGUAGE,$<,dbk) ; \
	$(XMLTO) html-nochunks $(XMLTO_OPTS) \
		--stringparam l10n.gentext.language=$$LL \
		--stringparam html.stylesheet='res/docbook.css' \
		--stringparam html.script='res/docbook.js' \
		--stringparam img.src.path=img/ \
		--stringparam admon.graphics.path=img/admonitions/ \
		-x res/xslt/html/docbook.xsl \
		$<
	LL=$(call LANGUAGE,$<,dbk) ; \
	$(XMLTO) html -o $*_chunked $(XMLTO_OPTS) \
		--stringparam l10n.gentext.language=$$LL \
		--stringparam html.stylesheet='../res/docbook.css' \
		--stringparam html.script='../res/docbook.js' \
		--stringparam img.src.path=../img/ \
		--stringparam admon.graphics.path=../img/admonitions/ \
		-x res/xslt/html/chunk.xsl \
		$<

%.dbk_validated: %.dbk
	$(XMLLINT) --noout --valid $^
	touch $@

## Special rule for master manual and tutorial
%_en.dbk: %.docbook
	cp -f $^ $@

manual_%.dbk: manual_%.mo manual_%.po $(MANUAL_MASTER)
	$(ITSTOOL) -m $< -o $@ --lang $* $(MANUAL_MASTER)

manual.pot: $(MANUAL_MASTER)
	$(ITSTOOL) -o manual.pot $<

manual_%.po: manual.pot
	$(MSGMERGE) -U $@ manual.pot --backup=simple --no-wrap --verbose

manual_%.mo: manual_%.po
	`cat $< | sed 's/, fuzzy//g' > $<.bak`
	$(MSGFMT) --check -o $@ $<.bak

tutorial_%.dbk: tutorial_%.mo tutorial_%.po $(TUTORIAL_MASTER)
	$(ITSTOOL) -m $< -o $@ --lang $* $(TUTORIAL_MASTER)

tutorial.pot: $(TUTORIAL_MASTER)
	$(ITSTOOL) -o tutorial.pot $<

tutorial_%.po: tutorial.pot
	$(MSGMERGE) -U $@ tutorial.pot --backup=simple --no-wrap --verbose

tutorial_%.mo: tutorial_%.po
	`cat $< | sed 's/, fuzzy//g' > $<.bak`
	$(MSGFMT) --check -o $@ $<.bak
