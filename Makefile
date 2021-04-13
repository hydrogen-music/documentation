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
	--stringparam toc.max.depth=3 \
	--stringparam xref.with.number.and.title=0 \
	--stringparam section.label.includes.component.label=1 \
	--stringparam admon.graphics.extension=.svg \
	--stringparam admon.graphics=1 \
	--stringparam admon.graphics.path=img/admonitions/ \
	-m res/styling.xsd

ITSTOOL = itstool
MSGMERGE = msgmerge
MSGFMT = msgfmt
XMLTO = xmlto
XMLLINT = xmllint

all: *.html clean

clean:
	-rm -f *.mo *_validated *.dbk *.bak

%.html: %.dbk %.dbk_validated
	LL=$$(echo -n $< | sed 's/.*_\(..\)\.dbk/\1/') ; \
	$(XMLTO) html-nochunks $(XMLTO_OPTS) \
		--stringparam l10n.gentext.language=$$LL \
		$<

%.dbk_validated: %.dbk
	$(XMLLINT) --noout --valid $^
	touch $@

## Special rule for master manual and tutorial
%_en.dbk: %.docbook
	cp -f $^ $@

manual_%.dbk: manual_%.mo manual_%.po $(MANUAL_MASTER)
	$(ITSTOOL) -m $< -o $@ --lang $* $(MANUAL_MASTER)

manual_%.po: $(MANUAL_MASTER)
	$(ITSTOOL) -o manual.pot $<
	$(MSGMERGE) -U $@ manual.pot --backup=simple --no-wrap --verbose

manual_%.mo: manual_%.po
	`cat $< | sed 's/, fuzzy//g' > $<.bak`
	$(MSGFMT) --check -o $@ $<.bak

tutorial_%.dbk: tutorial_%.mo tutorial_%.po $(TUTORIAL_MASTER)
	$(ITSTOOL) -m $< -o $@ --lang $* $(TUTORIAL_MASTER)

tutorial_%.po: $(TUTORIAL_MASTER)
	$(ITSTOOL) -o tutorial.pot $<
	$(MSGMERGE) -U $@ tutorial.pot --backup=simple --no-wrap --verbose

tutorial_%.mo: tutorial_%.po
	`cat $< | sed 's/, fuzzy//g' > $<.bak`
	$(MSGFMT) --check -o $@ $<.bak
