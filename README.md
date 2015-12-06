# image-geometry-parser
`image-geometry-parser` is ImageMagick geometry(http://www.imagemagick.org/script/command-line-processing.php#geometry) parser.

## Install
```sh
$ npm install image-geometry-parser
```

## Usage
```javascript
var ImageGeometryParser = require('image-geometry-parser');

ImageGeometryParser.parse('30%');         // => { scale: 30 }
ImageGeometryParser.parse('200x50%');     // => { widthScale: 200, heightScale: 50 }
ImageGeometryParser.parse('100');         // => { width: 100 }
ImageGeometryParser.parse('x200');        // => { height: 200 }
ImageGeometryParser.parse('100x200');     // => { width: 100, height: 200 }
ImageGeometryParser.parse('100x200^');    // => { width: 100, height: 200, operator: '^' }
ImageGeometryParser.parse('100x200!');    // => { width: 100, height: 200, operator: '!' }
ImageGeometryParser.parse('100x200>');    // => { width: 100, height: 200, operator: '>' }
ImageGeometryParser.parse('100x200<');    // => { width: 100, height: 200, operator: '<' }
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
