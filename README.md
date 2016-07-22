# FU: Frei und universell

Dieses Dokument als SRD-Website: <https://schlawiner.github.io/fu-rpg-frei-und-universell>

Dies ist eine Übersetzung von [FU: The Freeform Universal RPG](http://freeformuniversal.com) ins Deutsche. Die Struktur des Dokuments basiert auf der französischen Übersetzung von Bruno Bord.

Das Originalspiel wurde unter der [Creative-Commons-Lizenz (CC-BY)](http://creativecommons.org/licenses/by/3.0/) veröffentlicht. Diese Übersetzung steht ebenso unter der Creative-Commons-Lizenz.

## Copyright notice

> This work is based on FU: The Freeform/Universal RPG (found at http://freeformuniversal.com), by Nathan Russell, and licensed for our use under the Creative Commons Attribution 3.0 Unported license (http://creativecommons.org/licenses/by/3.0/).

> The Powered By FU logo is (c) Nathan Russell and is used with permission.

----

FU RPG ist (c) 2010 Nathan Russell.

Dieses Dokument ist die Version 0.2 der deutschen Übersetzung (c) 2016 Tina Trillitzsch und Thorsten Panknin

Weitere Bearbeitung und Korrekturlesung durch: ...

### Hinweise für Korrekturleserinnen

### Über Git auf der Kommandozeile arbeiten
Ich lege für jede Korrekturlesung einen eigenen Git-Branch an, den man als Korrekturleserin auschecken kann (ich füge euch als Contributors hinzu). Darin könnt ihr frei Änderungen machen, und ich merge am Ende diesen Branch mit Master.

Damit es möglich ist, einzelne Korrekturvorschläge zu übernehmen und andere eventuell zu verwerfen, ist es am besten, nach jeder einzelnen Korrektur zu committen. Dann können über "cherry picking" bestimmte Commits selektiv gemergt werden. Die einfachste Möglichkeit, das über die Konsole in einer Zeile zu machen:

    git commit -a -m "Kommentar"

### Über die Vorschlagsfunktion bei Gitbook
Eine andere Option ist es, beim Lesen des Dokuments auf Gitbook einen Korrekturvorschlag zu machen. Dafür (eingeloggt in einen existierenden Gitbook-Account) folgenden Link aufrufen - oder auf der Hauptseite des Buchs dort auf den großen "Read"-Button klicken:  

<https://www.gitbook.com/read/book/schlawiner/fu-frei-und-universell>

Dort kann man in jede Zeile klicken - es erscheint rechts ein Plussymbol (+), das man anklickt, um zu der entsprechenden Zeile einen Diskussionsthread im Gitbook-Projektforum anzulegen, in der man seinen Vorschlag einträgt und gegebenenfalls auch noch genauer erläutern kann.
In dem Fall sieht und kommentiert man immer nur den Master-Branch. Aber da man ja keine direkten Änderungen macht, sondern nur Vorschläge, ist das egal. Ich füge die Änderungen dann von Hand selektiv ein.

### Selbst mit pandoc Ausgabedokumente aus den Mardown-Dateien generieren

#### PDF über LaTeX (hier xetex)
pandoc --latex-engine=xelatex --template=pdf-template.tex -S -o fu.pdf 01-introduction.md 02-the-basics.md 03-the-characters.md 04-actions.md 05-narrator.md 06-race-to-the-temple-of-tot.md 07-appendix.md

#### Epub für Ebookreader oder Smartphones per CSS-Stylesheet
pandoc 01-introduction.md 02-the-basics.md 03-the-characters.md 04-actions.md 05-narrator.md 06-race-to-the-temple-of-tot.md 07-appendix.md --epub-stylesheet=styles/pandoc-epub.css --epub-cover-image=cover.jpg --epub-metadata=metadata.xml --number-sections -o fu.epub
