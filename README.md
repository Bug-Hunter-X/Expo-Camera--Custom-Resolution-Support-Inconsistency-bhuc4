# Expo Camera Custom Resolution Issue

This repository demonstrates an uncommon bug encountered when utilizing custom resolutions with the Expo Camera API. The problem lies in the lack of consistent error handling and device compatibility regarding non-standard resolutions.  On some devices, setting a custom resolution might work flawlessly, while on others, it causes unexpected behavior or crashes without providing informative error messages. This makes debugging incredibly challenging.

The `bug.js` file showcases the problematic code, attempting to set a resolution that might be unsupported by certain devices.  `bugSolution.js` offers a more robust solution that includes error handling and resolution fallback mechanisms.

## How to reproduce:

1. Clone the repository.
2. Run `npm install` to install the required packages.
3. Run the app on different devices and emulators.
4. Observe inconsistencies in the behavior when setting custom camera resolutions.

## Solution:

The solution in `bugSolution.js` employs a more robust strategy: it checks for available resolutions, handles potential errors gracefully, and provides a fallback resolution.