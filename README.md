# virtual-glovebox

## Set Up

Clone this repository. Once inside `virtual-glovebox`:
1. Run `yarn`
2. To run the web app, run `yarn next dev`
3. To run iOS app on your iPhone, do the following:
    1. Download "Expo Go" from App Store
    2. Run `yarn start`
    3. In the browser tab that opens, scan the QR code from your iPhone

## Front End

-   TailwindCSS
    -   [React Native Package](https://github.com/vadimdemedes/tailwind-rn)

## Deployment

The web app is set up to automatically deploy on pushes to `main` branch. Check out the web app at: <https://virtual-glovebox.vercel.app/>

For deploying the iOS app to the App Store, check out these docs to make it happen (since this is not implemented yet :) ):

-   <https://docs.expo.io/workflow/publishing/>
-   <https://docs.expo.io/distribution/introduction/>

# To Do

-   Use SVGs instead of PNGs for icons. Solution is going to be pretty involved
-   Customize TailwindCSS to use designer choices
