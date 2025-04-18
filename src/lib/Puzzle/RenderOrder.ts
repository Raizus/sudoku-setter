export enum RENDER_ORDER {
    NONE = -1,
    BACKGROUND = 0,
    OUTSIDE_CELLS_BACKGROUND = 10,
    CELL_COLOR_TOOL = 20,
    HIGHLIGHTS = 30,
    CELL_SHAPE_TOOL = 40,

    CELLS_SEEN_BY_SELECTION = 50,

    LINE_TOOLS = 60,
    ARROW_TOOLS = 70,
    SELECTION = 80,

    GRID_LINES = 100,

    CAGE_TOOLS = 110,
    OUTSIDE_TOOLS = 120,

    EDGE_TOOLS = 130,
    CORNER_TOOLS = 140,

    CENTER_PM = 200,
    CORNER_PM = 210,
    CELL_VALUES = 220,
    CELL_CONFLICTS = 230,
    PEN_TOOL = 240,
}