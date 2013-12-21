#/bin/bash

rm -rfv ./target/*
pdflatex --output-directory=./target/ Main.tex
pdflatex --output-directory=./target/ Main.tex

# Run script twice, because .toc file is created
# and considered as Table of Contents
