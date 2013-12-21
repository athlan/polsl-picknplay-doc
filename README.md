picknplay-doc
=============

## Compiling

To compile PDF into `/target` directory just use prepared script:

```
./bin/printpdf.sh
```

Make sure, that you able to call `pdflatex` from cli.

## Publishing

Configure file once:

```
cp bin/publish-ftp.sh.diff bin/publish-ftp.sh && chmod +x bin/publish-ftp.sh
vi bin/publish-ftp.sh # edit credentials
```

To publish, just type:
```
./bin/publish-ftp.sh
```
