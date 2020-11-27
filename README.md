# hamburger.js


## How to use

Load JavaScript as shown below
- icon -> HamburgerIcon
- nav -> openNav
- target -> Any element to toggle
- openClass -> Any class to use

```
<body>


<script src="hamburger.js"></script>
<script>
    // HamburgerMenu
    const hamburger = new SetHamburger({
        icon: '.hamburger__icon',
        nav: '.hamburger__nav',
        target: '.hamburger__bg',
        openClass: 'open',
    });
</script>
</body>
```

## Browser
Compatible with IE11 and modern browsers
