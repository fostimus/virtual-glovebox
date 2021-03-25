# virtual-glovebox

## Run Development Version

1.  Download ["Expo Go"](https://apps.apple.com/us/app/expo-go/id982107779) from the App Store
2.  Click this link: <https://expo.io/@fostimus/virtual-glovebox>

## Run Locally

Clone this repository. Once inside `virtual-glovebox`:
1. Run `yarn`
2. Ensure you have `apiKey` environment variable set in a `.env` file
3. To run the web app, run `yarn next dev`
4. To run iOS app on your iPhone, do the following:
    1. Download "Expo Go" from App Store
    2. Run `yarn start`
    3. In the browser tab that opens, scan the QR code from your iPhone

## Front End

### TailwindCSS

-   [React Native Package](https://github.com/vadimdemedes/tailwind-rn)

To change customize style values, edit the appropriate place in `tailwind.config.js`. Then, run `npx create-tailwind-rn` to generate the json file used to set style values throughout the app.

#### Custom Color Class Names

Prefix the following with `bg-` or `text-` to apply the style you want.

-   `vgb-primary` - currently a shade of green
-   `vgb-secondary` - currently a shade of purple
-   `vgb-bg` - used for the app backgroud, currently a light grey

## Build & Deploy

To create a build of the iOS app, run `expo build:ios`
    \- This will kick off a build in the expo account that manages the iOS app

To deploy to the Expo server (to update the link for the Expo dev link, the same one under [Run Development Version](<##Run Development Version>)), run `expo publish`

### App Store

Deploying to the iOS App Store _is a big fat pain_. The rough outline/steps are:
1\. Download app bundle file (.ipa) from Expo
2\. Upload to App Store Connect, via Transporter app.
3\. Submit the app for review, over and over again until accepted (there will be feedback why it was rejected, if so)

# To Do

-   Use SVGs instead of PNGs for icons. Solution is going to be pretty involved

# Known Issues

-   [react-native-dotenv with Next v9](https://github.com/goatandsheep/react-native-dotenv/issues/136)
