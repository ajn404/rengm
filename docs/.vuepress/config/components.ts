const { path } = require("@vuepress/utils");

const resolve = (dir) => {
  return path.resolve(__dirname, dir);
};

const p5_components_keys = [
  { name: "p5Start", path: "p5/p5Start" },
  { name: "basicCanvas", path: "p5/basicCanvas" },
];

const echarts_components_keys = [
  { name: "echartsUse", path: "echarts/echartsUse" },
  { name: "echartsAdvanceUse", path: "echarts/echartsAdvanceUse" },
  { name: "dynamicEchartsDemo", path: "echarts/dynamicEchartsDemo" },
];

const basic_3d_components = [
  { name: "basic3d", path: "three/basic3d" },
  { name: "three", path: "three/three" },
  { name: "basicThree", path: "three/basicThree" },
];

const vtk_components = [
  { name: "vtkDemo", path: "vtk/vtkDemo" },
  { name: "pdrReader", path: "vtk/pdrReader" },
  { name: "cubeAxes", path: "vtk/cubeAxes" },
];

const ele_components = [
  { name: "eleButton", path: "element/buttons/eleButton" },
  { name: "eleButtonLoading", path: "element/buttons/eleButtonLoading" },
  { name: "eleButtonText", path: "element/buttons/eleButtonText" },
  { name: "demo", path: "element/demo" },
];

const defaultComponentKeys = [{ name: "home", path: "home" }];

const templateComponents = [
  { name: "cssDemo", path: "basic/template/cssDemo" },
  { name: "ecmaSymbolDemo", path: "basic/ecma/Symbol" },
];

const componentKeys = [
  ...defaultComponentKeys,
  ...p5_components_keys,
  ...echarts_components_keys,
  ...basic_3d_components,
  ...vtk_components,
  ...ele_components,
  ...templateComponents,
];
const components = {};
componentKeys.forEach((component) => {
  components[component.name] = resolve(`../components/${component.path}.vue`);
});

export default components;
