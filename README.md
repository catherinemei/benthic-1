In the project directory, you can run:

### `pnpm start`

This will run Benthic's screen reader interface in development mode. <br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To see either the Stacked Bar Chart prototype or the Line Chart Prototype (used as introductory example in the user study), go to `src/App.tsx` and change which hypergraph is being passed to `TraversalOutputComponentKeyboardParentFocus` via the `nodeGraph` property.

### Navigation Controls

Once the Benthic screen reader interface is loaded in the browser, you can use these controls to navigate the interface:

* Press `left`, `right`, `up`, and `down` arrow keys to traverse nodes in same layer
* Press `shift` and `up` arrow to navigate to the previous layer in the hierarchy (ascending)
* Press `shift` and `down` arrow to navigate to the next layer in the hierarchy (descending)
* Press `enter` to select a node
* Press `h` to refocus on current node (in adjacency layer)