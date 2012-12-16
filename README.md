# $.cors

  Simple and tiny CORS jQuery Plugin

## Dependencies
	- jQuery 1.8.2

## How-to
Adds the JavaScript at bottom of page, before `</body>` tag close and after jQuery script call.
```
<script src="http://code.jquery.com/jquery-1.8.2.js"></script>
<script src="cors.js"></script>
```

### Configuration
See [jQuery Ajax configuration](http://api.jquery.com/jQuery.ajax/)

## Example
```javascript
$.cors({
	'url': 'https://api.mercadolibre.com/sites/MLA/search?query=ps3',
	'success': function (data) {
		// Code here!
	},
	'error': function () {
		// Code here!
	}
});

// or

$.cors('https://api.mercadolibre.com/sites/MLA/search?query=ps3', function (data) {
	// Code here!
});
```

## Contact
- Guille Paz (Frontend developer - JavaScript developer | Web standards lover)
- E-mail: [guille87paz@gmail.com](mailto:guille87paz@gmail.com)
- Twitter: [@pazguille](http://twitter.com/pazguille)
- Web: [http://pazguille.me](http://pazguille.me)

## License
### The MIT License
Copyright (c) 2012 [@pazguille](http://twitter.com/pazguille)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.