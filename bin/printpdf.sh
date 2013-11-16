#/bin/bash

rm -rfv ./target/*
pdflatex --output-directory=./target/ Main.tex
