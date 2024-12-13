## Text Animation Effect

A simple text animation effect that replaces characters with random symbols on hover. When hovering over text elements with the class `animate_letters`, the text will scramble through random characters before returning to its original state.

## How It Works

The animation consists of two main phases:
1. On hover, characters are replaced with random symbols from a predefined set (numbers, letters, and special characters)
2. After the scramble animation, text smoothly transitions back to its original state from left to right

The animation timing:
- Scramble phase: 12 iterations at 30ms intervals
- Return phase: Characters restore one at a time at 40ms intervals

## Usage

1. Add the `animate_letters` class to any text element you want to animate:

```html
<p class="animate_letters">Hover me!</p>
```

2. The animation will automatically trigger when you hover over the text.

3. You can customize the animation by modifying the `animateLetters` function in `script.js`.

## Customization

You can customize the animation by modifying the `animateLetters` function in `script.js`.

## Dependencies

This project requires JavaScript to be enabled in your browser.

## License

This project is open-sourced under the MIT License.


## How to Contribute

If you'd like to contribute to this project, please fork the repository and submit a pull request.

## How to Report Bugs

If you find any bugs, please open an issue in the repository.

## How to Get Help

If you need help, please open an issue in the repository.