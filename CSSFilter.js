class CSSFilter {
  constructor(){
    this.filters = {
      'brightness': {
        value: 100,
        dirty: false,
        fn: function () {
          return `brightness(${this.value}%)`;
        }
      },
      'contrast': {
        value: 100,
        dirty: false,
        fn: function () {
          return `contrast(${this.value}%)`;
        }
      },
      'grayscale': {
        value: 0,
        dirty: false,
        fn: function () {
          return `grayscale(${this.value})`;
        }
      },
      'sepia': {
        value: 0,
        dirty: false,
        fn: function () {
          return `sepia(${this.value})`;
        }
      },
      'hue-rotate': {
        value: 0,
        dirty: false,
        fn: function () {
          return `hue-rotate(${this.value}deg)`;
        }
      },
      'invert': {
        value: 0,
        dirty: false,
        fn: function () {
          return `invert(${this.value}%)`;
        }
      },
      'saturate': {
        value: 0,
        dirty: false,
        fn: function () {
          return `saturate(${this.value})`;
        }
      },
      'opacity': {
        value: 0,
        dirty: false,
        fn: function () {
          return `opacity(${this.value})`;
        }
      },
      'blur': {
        value: 0,
        dirty: false,
        fn: function () {
          return `blur(${this.value}px)`;
        }
      },
      //dropShadow: dropShadow.value
    };
  }

  generateCSS(){
    let reduced = Object.keys(this.filters).reduce(function (prev, curr, index, array) {
      if (this.filters[curr].dirty === true) {
        return prev + ' ' + this.filters[curr].fn();
      } else {
        return prev;
      }
    }.bind(this), '')

    return reduced;
  }

  setValue(name, value){
    this.filters[name].dirty = true;
    this.filters[name].value = value;
  }
}

module.exports = CSSFilter;
