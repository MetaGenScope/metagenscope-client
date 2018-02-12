# Writing Display Modules

Creating a front-end display module is a three-step process: describe the data, fetch the data, and render the data. The first two steps are very straightforward while the final step, rendering the data, is a bit more complex and requires more of an understanding of how React works.

## Data Type Definitions

The source data typing must be declared using TypeScript. These definitions are found in `src/services/api/models/queryResults.ts` and describe the JSON returned by the server. Use the existing types as a guide and refer to TypeScript's documentation on [Basic Types](https://www.typescriptlang.org/docs/handbook/basic-types.html) and [Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html).

One important detail to note is the use of `QueryResultWrapper<T>`. This takes care of the status wrapper around the actual display result's data. You only need to worry about defining the display data itself.

## Fetching Data

API calls are all defined in `src/services/api/index.ts`. The API call method creates an Axios request and returns a promise executing that request and deserializing the result using the definition defined in the previous step. Errors are handled by the `ResultPlot` component so you do not need to worry about that.

## Displaying Data

To simplify displaying data, we have provided the `ResultPlot` component. `ResultPlot` handles polling the server for display module data and manages state. You will use either `HighChartResultPlot` or `D3ResultPlot` depending on whether you are using a HighChart graph or custom D3 code.

You will need set the title and description of the module in the constructor:

```ts
constructor(props: { id: string }) {
  ...

  this.title = 'My Display Module';
  this.description = (
    <div>
      <p>Paragraph one.</p>
      <p>Paragraph two.</p>
    </div>
  );

  ...
}
```

You will need to override `fetchData(): Promise<QueryResultWrapper<T>>`. The body of this method will be the API call you defined in the previous step.

Within this component, you may define any additional state or sub-components you need to (ex. color-by controls). It will be helpful to define the actual plot as a separate reusable component (ex. Scatter Plot). Then you can use the `ResultPlot` just to transform the fetched data to a generic plot input data type and pass that to the generic plot. See `src/components/SampleSimilarity/` for an example of a display module with controls for interacting with the graph.

### HighCharts

You will need to override `createPlot(data: T, graphId: string): Highcharts.ChartObject`.

See `src/components/HMPPlot/` for an example of implementing a HighChart display module.

### Custom D3

You will need to override `renderPlot(data: T): React.ReactNode`.

See `src/components/TaxonAbundance/` for an example of implementing a display module with custom D3 code.
