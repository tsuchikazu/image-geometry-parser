import assert from 'power-assert';
import ImageGeometryParser from '../src/ImageGeometryParser';

describe('ImageGeometryParser', () => {
  describe('#parse', () => {
    context('when src is scale%', () => {
      it('should return scale', () => {
        assert.deepEqual(ImageGeometryParser.parse('30%'), { scale: 30 });
      });
    });

    context('when src is scale-x%xscale-y%', () => {
      it('should return widthScale and heightScale', () => {
        assert.deepEqual(ImageGeometryParser.parse('200x50%'), { widthScale: 200, heightScale: 50 });
      });
    });

    context('when src is width', () => {
      it('should return width', () => {
        assert.deepEqual(ImageGeometryParser.parse('100'), { width: 100 });
      });
    });

    context('when src is xheight', () => {
      it('should return height', () => {
        assert.deepEqual(ImageGeometryParser.parse('x200'), { height: 200 });
      });
    });

    context('when src is widthxheight', () => {
      it('should return width and height', () => {
        assert.deepEqual(ImageGeometryParser.parse('100x200'), { width: 100, height: 200 });
      });
    });

    context('when src is widthxheight^', () => {
      it('should return width and height and operator', () => {
        assert.deepEqual(ImageGeometryParser.parse('100x200^'), { width: 100, height: 200, operator: '^' });
      });
    });

    context('when src is widthxheight!', () => {
      it('should return width and height and operator', () => {
        assert.deepEqual(ImageGeometryParser.parse('100x200!'), { width: 100, height: 200, operator: '!' });
      });
    });

    context('when src is widthxheight>', () => {
      it('should return width and height and operator', () => {
        assert.deepEqual(ImageGeometryParser.parse('100x200>'), { width: 100, height: 200, operator: '>' });
      });
    });

    context('when src is widthxheight<', () => {
      it('should return width and height and operator', () => {
        assert.deepEqual(ImageGeometryParser.parse('100x200<'), { width: 100, height: 200, operator: '<' });
      });
    });
  });
});
