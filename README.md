### `npm run all`

Runs all of the scripts needed for live development
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm test`

Launches the jest test runner, you can see the outcome in your cli



TODO;
-  Save uploaded logo file XX
-  Loading landing screen XX
-  Loading logo images animation
-  Loading file upload progress
-  Meta tags
-  Navbar change active animation of green dash
-  If on mobile = choose from files instead drag and drop
-  Error msg in case api returns nothing
-  Api data validation

I wanted to create something very simple and clean for the sake of information readability
which would be the main purpose of the page like this. There are definitely more things to work on eg. animation
but I didn't want to overdo it - I already spend more time on it then it was assigned.


I thought about using custom useModal hook for the sake of readability, but it wouldn't be very pragmatic
and with context API we can prevent Prop Drilling

Boostrap grid on the frontend.
I used only functional components for the sake of todays trends in react.
Although class components are still valid way to write a react component,
whole community is moving to functional comps and since facebook introuduced
useState in 16.8 ver of react you can write statefull functionals thus allowing us
to create whole project without using classes + code looks cleaner + improved performance
For real dashboard app like this, I'd probably use Gatsby to utilize its lazy loading features as well
CMS packages.

Tests:
I used Jest for unit testing. I only tested in/out data. Usually, I don't test UI with jest because
I don't really see the point... maybe with more sophisticated UI it would be helpful but for something
like that, I only test UI in terms of visual performance, responsivity and cross-browser esthetics on different
devices.


Code quality:
  SCSS - Bem Methodologie
  JS - eslint-prettier modified Airbnb Style Guide
