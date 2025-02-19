import { Hypergraph } from "./priority-traversal-types";

export const lineGraphHypergraph: Hypergraph = {
  "0": {
    id: "0",
    displayName: "Line Graph",
    description:
      "Monthly Average Temperature for Chicago and Seattle in Summer. Line graph. With axes month and temperature in Fahrenheit.",
    descriptionTokens: {
      label: "Line Graph",
      shortDescription:
        "Monthly Average Temperature for Chicago and Seattle in Summer.",
      longDescription:
        "Monthly Average Temperature for Chicago and Seattle in Summer. With axes month and temperature in Fahrenheit.",
    },
    parents: [],
    children: ["1", "2"],
    priority: 0,
  },
  "1": {
    id: "1",
    displayName: "X-axis",
    description: "X Axis. Contains June to August.",
    descriptionTokens: {
      label: "X-axis",
      shortDescription: "Contains 3 months.",
      longDescription: "Contains 3 months.",
    },
    parents: ["0"],
    children: ["8", "9", "10"],
    priority: 1,
  },
  "2": {
    id: "2",
    displayName: "Legend",
    description: "Legend. Contains Chicago, Seattle",
    descriptionTokens: {
      label: "Legend",
      shortDescription: "Contains 2 cities.",
      longDescription: "Contains 2 cities.",
    },
    parents: ["0"],
    children: ["15", "16"],
    priority: 2,
  },
  "8": {
    id: "8",
    displayName: "June",
    description:
      "Month: June. Contains: 2 points. Temperature of Chicago and Seattle in June.",
    descriptionTokens: {
      label: "June",
      shortDescription: "Month: June. Contains: 2 points.",
      longDescription: "Contains 2 points.",
    },
    parents: ["1"],
    children: ["27", "28"],
    priority: 3,
  },
  "9": {
    id: "9",
    displayName: "July",
    description:
      "Month: July. Contains: 2 points. Temperature of Chicago and Seattle in July.",
    descriptionTokens: {
      label: "July",
      shortDescription: "Month: July. Contains: 2 points.",
      longDescription: "Contains 2 points.",
    },
    parents: ["1"],
    children: ["29", "30"],
    priority: 3,
  },
  "10": {
    id: "10",
    displayName: "August",
    description:
      "Month: August. Contains: 2 points. Temperature of Chicago and Seattle in August.",
    descriptionTokens: {
      label: "August",
      shortDescription: "Month: August. Contains: 2 points.",
      longDescription: "Contains 2 points.",
    },
    parents: ["1"],
    children: ["31", "32"],
    priority: 3,
  },
  "15": {
    id: "15",
    displayName: "Chicago",
    description:
      "City: Chicago. Contains: 3 temperature points. Monthly temperature data for Chicago.",
    descriptionTokens: {
      label: "Chicago",
      shortDescription: "Contains: 3 temperature points.",
      longDescription: "Contains 3 points.",
    },
    parents: ["2"],
    children: ["27", "29", "31"],
    priority: 3,
  },
  "16": {
    id: "16",
    displayName: "Seattle",
    description:
      "City: Seattle. Contains: 3 temperature points. Monthly temperature data for Seattle.",
    descriptionTokens: {
      label: "Seattle",
      shortDescription: "Contains: 3 temperature points.",
      longDescription: "Contains 3 points.",
    },
    parents: ["2"],
    children: ["28", "30", "32"],
    priority: 3,
  },
  "27": {
    id: "27",
    displayName: "Chicago in June",
    description:
      "Month: June. City: Chicago. Average temperature: 70.4 Fahrenheit.",
    descriptionTokens: {
      label: "Chicago in June",
      shortDescription:
        "Month: June. City: Chicago. Average temperature: 70.4 Fahrenheit.",
      longDescription: "70.4 Fahrenheit. Data point.",
    },
    parents: ["8", "15"],
    children: [],
    priority: 4,
  },
  "28": {
    id: "28",
    displayName: "Seattle in June",
    description:
      "Month: June. City: Seattle. Average temperature: 68.0 Fahrenheit.",
    descriptionTokens: {
      label: "Seattle in June",
      shortDescription:
        "Month: June. City: Seattle. Average temperature: 68.0 Fahrenheit.",
      longDescription: "68.0 Fahrenheit. Data point.",
    },
    parents: ["8", "16"],
    children: [],
    priority: 4,
  },
  "29": {
    id: "29",
    displayName: "Chicago in July",
    description:
      "Month: July. City: Chicago. Average temperature: 72.7 Fahrenheit.",
    descriptionTokens: {
      label: "Chicago in July",
      shortDescription:
        "Month: July. City: Chicago. Average temperature: 72.7 Fahrenheit.",
      longDescription: "72.7 Fahrenheit. Data point.",
    },
    parents: ["9", "15"],
    children: [],
    priority: 4,
  },
  "30": {
    id: "30",
    displayName: "Seattle in July",
    description:
      "Month: July. City: Seattle. Average temperature: 69.5 Fahrenheit.",
    descriptionTokens: {
      label: "Seattle in July",
      shortDescription:
        "Month: July. City: Seattle. Average temperature: 69.5 Fahrenheit.",
      longDescription: "69.5 Fahrenheit. Data point.",
    },
    parents: ["9", "16"],
    children: [],
    priority: 4,
  },
  "31": {
    id: "31",
    displayName: "Chicago in August",
    description:
      "Month: August. City: Chicago. Average temperature: 75.7 Fahrenheit.",
    descriptionTokens: {
      label: "Chicago in August",
      shortDescription:
        "Month: August. City: Chicago. Average temperature: 75.7 Fahrenheit.",
      longDescription: "75.7 Fahrenheit. Data point.",
    },
    parents: ["10", "15"],
    children: [],
    priority: 4,
  },
  "32": {
    id: "32",
    displayName: "Seattle in August",
    description:
      "Month: August. City: Seattle. Average temperature: 69.4 Fahrenheit.",
    descriptionTokens: {
      label: "Seattle in August",
      shortDescription:
        "Month: August. City: Seattle. Average temperature: 69.4 Fahrenheit.",
      longDescription: "69.4 Fahrenheit. Data point.",
    },
    parents: ["10", "16"],
    children: [],
    priority: 4,
  },
};
