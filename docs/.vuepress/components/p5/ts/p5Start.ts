export const allMethods = [
    {label:"default",value:"defaultFunc"},
    {
      label: "场景1（偏交互2D和生成艺术）",
      children: [
        {
          value: "main",
          label: "main",
        },
        {
          value: "LSystem",
          label: "LSystem",
        },
        {
          value: "angularMotion",
          label: "angularMotion"
        },
        {
          value: 'polarCoordinates',
          label: 'polarCoordinates'
        }
      ],
    },
    {
      label: "场景2（偏游戏）",
      children: [
        {
          label: "移动拼图",
          value: "slidePuzzle",
        },
      ],
    },
    {
      label:"场景3（webgl）",
      children: [
        {
          label: "geometries",
          value: "geometries"
        },
        {
          label:"sinCos3D",
          value:"sinCos3D"
        },
        {label:"震级",value:'earthQuake'}
      ]
    },
    {
      label:"非演示场景(熟悉api)",
      children: [
        {
          label:"3d box",
          value:"boxRef"
        },
        {
          label:"3d box 旋转",
          value:"boxRef1"
        }
      ]
    },
    {
      label:"场景4(应用)",
      children:[
        {
          label:'有丝分裂',
          value:'mitosis'
        }
      ]
    },
    {
      label:'场景5(算法可视)',
      children:[
        {
          label:'冒泡排序',
          value:'bubbleSort'
        }
      ]
    }
  ];