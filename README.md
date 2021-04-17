Hydrogen Documentation
======================

Contents:

1. Overview
2. Installation and Usage
3. Translators
4. Documentors
5. Developers
6. XML and Validation
7. Additional DocBook Authoring Restrictions

# 1. Overview


Hydrogen documentation is maintained in `DocBook 4.5` (XML) and
translated to HTML before release.  Different translations are managed
through `GNU gettext` PO files.  When the documentation is generated,
the PO files and the master documentation are merged to create the doc
for that specific language.

This document is split up into the three types of people who may want
to contribute to Hydrogen documentation:  Translators, Documentors,
and Developers.  A section is devoted to each one, individually.

This document assumes that you don't know much, and tries to give you
pointers to the stuff you need to know.

# 2. Installation and Usage

The following tools you must install in order to maintain and process the
documentation (on Debian-based systems).

``` bash
sudo apt install itstool gettext xmlto libxml2-utils make
```

To update the resulting HTML files after changing a master
document (manual.docbook and tutorial.docbook) or a translation
(*.po), you just have to enter

``` bash
make
```

## 2.1. Detailed description

The toolchain consists of the following programs:

    [itstool](http://itstool.org/index.html) - Uses the rules of the
	W3C Internationalization Tag Set (ITS) to create the translation
	templates (*.pot) based on the 
    original DocBook source and merges the compiled *.mo files with
	the original to produce the translated DocBook files.
	
	`msgmerge`, `msginit`, `msgfmt` - Are part of the
	[gettext](https://www.gnu.org/software/gettext/manual/gettext.html) 
	internationalization
	framework and used to update, initialize, and compile the
    *.po translation files.

    [xmlto](https://pagure.io/xmlto/) - Converts DocBook files to
	HTML.  (Note that `xmlto` is part of libxml2 and can convert
	DocBook to much more than just HTML.)

    [xmllint](http://xmlsoft.org/) - Used to validate the DocBook
	files against the DocBook DTD.

    `make` - GNU's make utility.

# 3. Translators

To translate documentation for Hydrogen you will need:

* A PO-file editor.  (Note that a text editor works fine, but a
      translation assistant like `poedit` is better.)
* To be able to read and understand English.

If you don't have all the tools listed in Section 2 or do not know how
to install them on your particular system, that's OK.  Ask the
[Hydrogen Developer
list](https://sourceforge.net/projects/hydrogen/lists/hydrogen-devel)
and someone there can process files for you.

To make a new translation of the Hydrogen manual or tutorial, you
should use the following command

``` bash
msginit -l LL -i manual.pot -o manual_LL.po
```

Note that the `_LL` is added to the translation template, and `LL` is
the IANA abbreviation code for
that language.  (E.g. 'ja' is for 'Japanese.')  The registry for the
codes is located here:

    http://www.iana.org/assignments/language-subtag-registry

All translation files (.po) will be updated and converted to .html
files as soon as one of the master documents - manual.docbook or
tutorial.docbook - is touched and the `make` command is executed.

You can either see the changes using the commandline tool `diff`, the
graphical program `meld`, or your favorite translation editor.

NOTICE:  Before creating the HTML file, the document will be
validated.  If the document does not validate, you will have to alter
your translation file so that the output is a valid DocBook document.
For more information on Validation, see Section 6.

RULES AND GUIDELINES FOR TRANSLATING:

* No new content.  New content must be first added to the master
      (English) manual, and then translated to all the other manuals.
	  
* All content enclosed by angle brackets must not be translated. E.g.

``` xml
      "<title>Hydrogen Tutorial</title>
```
	will be translated to

``` xml
      "<title>Tutoriel de Hydrogen</title>
```

* Maintain the DocBook XML structure as closely as possible.  Do
      not add sections, divide paragraphs, or alter the markup
      significantly.

* The English translation uses a little humor to try to keep the
      reading interesting.  When this happens, the language and idioms
      being used are very cultural.  Please do *NOT* translate the
      words literally.  Instead, please translate the ideas to your
      culture as you see fit.  We've asked the Documentors to mark
      when this is happening so that you don't miss the joke.  This
      should show up in the PO file.

* If your culture doesn't like American-style informal writing,
      please feel free to make a humor-less translation.

* Submit translations to the Hydrogen Developers list
      (hydrogen-devel@lists.sourceforge.net)

# 4. Documentors

The master documents - manual.docbook and tutorial.docbook - are in
English.  All new content and major revisions shall be done there
first.  In order to work on the documentation, you will need:

* To know and understand [DocBook](https://tdg.docbook.org/tdg/4.5/docbook.html) well.

* To know and understand Hydrogen well enough to *ask*
      *questions*.

* An XML editor (note: any text editor will do).

* A way to create images.  (e.g. Inkscape, GIMP, PhotoShop)

What you write is pretty much your own style.  Please *do* keep the
text interesting to read by using wit and a more familiar
conversational style.  If you are using an English pun or expression
that is intended to convey humor, please mark it so that the
translator gets the joke:

    <!-- TRANSLATORS: "Have your squash and eat it, too." This
    combines a well-known cliche ("Have your cake and eat it, too.")
    and a pun on the word "squash."  In English, "squash" is a
    vegetable (and not a very popular one) and "squash" is also a verb
    meaning "to flatten in a destructive way."  For example: "I
    squashed the bug to kill it." -->

(Ahem, don't ask me how I came up with that one.....)

Before submitting (or committing) your changes, please make sure that
your documents validate (see Section 6 below).  Some guidelines:

* Use double-quotes for all attributes.
          Good:   ```<foo id="bar"/>```
          Bad:    ```<foo id='bar'/>```

* Please do not indent any elements that go into the ```<screen>```
  tag or at least do so with care. All white spaces will show up in
  the resulting HTML file as well.

* Please make good use of ```<link>``` and ```<xref>``` tags for
      internal links within the document.

* Since we're using ```<link>``` and ```<xref>```'s -- if you change
      an id=".."  attribute, make sure that you change all its
      references, too.  If you create a broken link, the document
      won't validate.

* Do not make reference to specific section numbers, figure numbers,
      or titles (e.g. "See section 2.1.3 The Menu Bar").  Instead, use
      ```<xref>``` tags so that this text will be generated for you.

* For italics, you do not need to set the role="italic" attribute,
      since that is the default.  To get boldface, you must use
      role="bold".
          Example:  ```<emphasis role="bold">really</emphasis>```
          Bad:      ```<emphasis rold="italic">might</emphasis>```

* For web links, don't write the URL twice.  The processor will do
      that for you, and it makes it more readable.
          Good:     ```<ulink url="http://www.google.com"/>```
          Bad:      ```<ulink url="http://www.google.com">http://www.google.com</ulink>```

* Don't worry about typesetting in the DocBook documents.  That's
      what XSL and CSS stylesheets are for.  Get the content done, and
      then worry about formatting.  Don't get distracted by stuff like
      section indents or relative font sizes.

* However, *do* worry about typesetting on pre-formatted tags like
      ```<screen>``` and ```<code>``` and ```<literallayout>```.  Extra spaces and
      indents in the source document *will* carry through all the way
      to the final document.

# 5. Developers
-------------

Since we don't want to add `xmlto`, `itstool`, `xmllint`, `msgmerge`,
`msgfmt`, and the DocBook DTD's to our normal build requirements: All
HTML files need to be generated and committed before releasing.  After
the release, the generated HTML files can (and should) be deleted.  Do
not commit the generated DocBook documents.

If you are preparing a Hydrogen release, you must have all the tools
listed above so that you can process the documents.  You may also need
to understand DocBook enough to help a translator with validation
issues.  (See Section 6 below.)

The reason for doing it this way is that the tools are not very
portable across Linux, Mac, and Windows.  Nor or they even very
portable across different Linux distributions.  However, the tools are
fairly stable on Debian/Ubuntu -- which most of the current developers
are using.

# 6. XML and Validation
---------------------

DocBook is a specific flavor of XML and in case you already have read
or written HTML code in recent years - since its port to XHTML - you
can get started with DocBook in no time. To read more about XML, check
out the Wikipedia article:

    http://en.wikipedia.org/wiki/XML

Some basics:

* The tags are case sensitive.  ```<IMG>``` and ```<img>``` are not the same.

* Closing tags are not optional.
* Empty tags are like this:  <br/>.

If a document follows all the rules of XML, it is called
"Well-Formed."  For example, the following is a well-formed XML
document:

    <?xml version='1.0' encoding='UTF-8'?>
    <ijustmadethistagup>
       <because>It's</because><ok/> to <make it="up">as</make>
       you go</ijustmadethistagup>

But the following is *NOT* a well-formed XML document:

    <?xml version='1.0' encoding='UTF-8'?>
    <ijustmadethistagup>
       <because>It's <ok/> to <make it=up>as</make>
       you go</ijustmadethistagup>

(Can you find the errors?  If you get stumped, feed it to a
validator.)

While it's imperative that documents be well-formed, many documents
(such as DocBook) have a specific structure that must be maintained.
For example, in HTML you should only have paragraphs inside of the
body:

    <body>
       <p>I am the very model of a modern
        major general.</p>
    </body>

But, if I do this, it will still be well-formed XML:

    <p>
       <body>I am the <happy>very</happy> model of a modern
        major general.</body>
    </p>

It is not, however, a Valid HTML document.  The W3C published a DTD
(Document Type Definition) for HTML that clearly specifies that the
former is OK and the latter is degenerate.

When a document is checked against the DTD, it is said to be "Valid"
or "Validated" if it passes all the requirements of the DTD.

Validation is important, because our DocBook source files are going to
be _processed_ by several automatic tools.  These tools know the
structure of DocBook, and are able to generate output based on that.
However, if we feed them an invalid document, the tools may process
the data -- but they probably won't process it *right*.

# 7. Additional DocBook Authoring Restrictions
-------------------------------------

It has been found that the toolchain is assuming some things about the
document structure that are not specified in any DTD. Thus, in order
to get our files to work with poxml, we have to add the following
restrictions:

* ```<para>``` may not contain an ```<itemizedlist>```

* The 'msgid' string inside the .po file may not contain an empty
    element.  So, if you have some text that includes
    ```<ulink url="http://www.foo.bar"/>```, you will need to convert
    it to ```<ulink url="http://www.foo.bar">http://www.foo.bar</ulink>```

* You must use double quotes (") for attributes, not single ('),
    even though BOTH are OK in XML.

* The manual may not have '>', it must always be ```&gt;```.

* Avoid embedding a lot of structured markup inside a paragraph.
    For example:
        ```
       <para>Install hydrogen like this:
         <screen>
           <prompt>$</prompt> <command>apt-get hydrogen</command>
         </screen>
       </para>
       ```

    This makes things a little funky in the PO files.  Also, it
    doesn't really make sense to embed a ```<screen>``` (like HTML ```<pre>```)
    inside of a ```<para>```.  Instead, do it like this:
    ```
       <para>Install hydrogen like this:</para>
       <screen>
         <prompt>$</prompt> <command>apt-get hydrogen</command>
       </screen>
       ```

    However, if you *really* need to, go ahead and try it.  Just
    be sure to test that it will match the strings for translation.

* If you change indentation... in tags... be careful how that
    affects the .po files.  For example, if you had:

        <foo><bar>bat</bar><baz>zap</baz></foo>

    But change it to:

        
        <foo>
          <bar>bat</bar>
          <baz>zap</baz>
        </foo>
        

    You will need to add spaces in the .po files like this:

    Before: ```<foo><bar>bat</bar><baz>zap</baz></foo>```
    After:  ```<foo> <bar>bat</bar> <baz>zap</baz> </foo```
