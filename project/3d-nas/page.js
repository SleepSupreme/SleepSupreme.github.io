var games;
var edges;
var myGraph;
var myData;
var highlightLinks = [];

init();

var x = document.getElementById("right-float");
var y = document.getElementById("bottom-float");
var z = document.getElementById("left-float");
x.style.display = "none";
y.style.display = "none";
z.style.display = "none";
var colorList = [
    Math.round(Math.random() * Math.pow(2, 24)),
    Math.round(Math.random() * Math.pow(2, 24)),
    Math.round(Math.random() * Math.pow(2, 24)),
    Math.round(Math.random() * Math.pow(2, 24)),
    Math.round(Math.random() * Math.pow(2, 24)),
    Math.round(Math.random() * Math.pow(2, 24)),
    Math.round(Math.random() * Math.pow(2, 24)),
    Math.round(Math.random() * Math.pow(2, 24)),
    Math.round(Math.random() * Math.pow(2, 24)),
    Math.round(Math.random() * Math.pow(2, 24))
]


function init() {
    let select = document.getElementById("gselect");
    select.addEventListener("change", onSelectChanged);
    
    d3.json("data/all_settings.json").then(function (data) {
        myData = data;
        loadAllSettings();
    });
}

function refreshHTML(node) {
    document.getElementById("name").innerHTML = node.id;
}

function leftClick(node) {
    refreshHTML(node);
}

function rightClick(node) {
    refreshHTML(node);
    var counter = 0;
    highlightLinks = [];
    let neighbors = [];
    var imgs = "";
    for (link of gData.links) {
        if (link.source.id == node.id) {
            highlightLinks.push(link);
            counter++;
            neighbors.push(link.target);
        }
        if (link.target.id == node.id) {
            highlightLinks.push(link);
            counter++;
            neighbors.push(link.source);
            // console.log(link);
        }
    }
    // document.getElementById("talltime").innerHTML = counter;
    for (neigh of neighbors) {
        imgs += posterFormat(neigh.id);
    }
    document.getElementById("neighbors").innerHTML = imgs;
    // console.log(highlightLinks);
    updateGeometries();
}

function loadAllSettings() {   
    const Graph = ForceGraph3D({
        controlType: 'trackball'
    }) // trackball, orbit or fly
    (document.getElementById('3d-graph'))
    .graphData(myData)
        .nodeLabel(node => node.id)
        .nodeAutoColorBy(node => node.type)
        .nodeVal(node => (node.metric + 0.5) * 4)
        .linkWidth(2)
        .linkOpacity(0.08)
        .linkAutoColorBy(link => link.type)
        .onNodeClick(node => {
            leftClick(node);
        })
        .onNodeRightClick(node => {
            rightClick(node);
        });

    myGraph = Graph;
}

function loadCls501000() {
    const Graph = ForceGraph3D({
        controlType: 'trackball'
    }) // trackball, orbit or fly
    (document.getElementById('3d-graph'))
    .graphData(myData)
        .nodeLabel(node => node.id)
        .nodeAutoColorBy(node => node.type)
        .nodeVal(node => (node.metric + 0.5) * 4)
        .linkWidth(2)
        .linkOpacity(0.08)
        .linkAutoColorBy(link => link.type)
        .onNodeClick(node => {
            leftClick(node);
        })
        .onNodeRightClick(node => {
            rightClick(node);
        });

    myGraph = Graph;
}

function loadCls50100() {
    const Graph = ForceGraph3D({
        controlType: 'trackball'
    }) // trackball, orbit or fly
    (document.getElementById('3d-graph'))
    .graphData(myData)
        .nodeLabel(node => node.id)
        .nodeAutoColorBy(node => node.type)
        .nodeVal(node => (node.metric + 0.5) * 4)
        .linkWidth(2)
        .linkOpacity(0.08)
        .linkAutoColorBy(link => link.type)
        .onNodeClick(node => {
            leftClick(node);
        })
        .onNodeRightClick(node => {
            rightClick(node);
        });

    myGraph = Graph;
}

function loadCls101000() {
    const Graph = ForceGraph3D({
        controlType: 'trackball'
    }) // trackball, orbit or fly
    (document.getElementById('3d-graph'))
    .graphData(myData)
        .nodeLabel(node => node.id)
        .nodeAutoColorBy(node => node.type)
        .nodeVal(node => (node.metric + 0.5) * 4)
        .linkWidth(2)
        .linkOpacity(0.08)
        .linkAutoColorBy(link => link.type)
        .onNodeClick(node => {
            leftClick(node);
        })
        .onNodeRightClick(node => {
            rightClick(node);
        });

    myGraph = Graph;
}

function loadCls10c() {
    const Graph = ForceGraph3D({
        controlType: 'trackball'
    }) // trackball, orbit or fly
    (document.getElementById('3d-graph'))
    .graphData(myData)
        .nodeLabel(node => node.id)
        .nodeAutoColorBy(node => node.type)
        .nodeVal(node => (node.metric + 0.5) * 4)
        .linkWidth(2)
        .linkOpacity(0.08)
        .linkAutoColorBy(link => link.type)
        .onNodeClick(node => {
            leftClick(node);
        })
        .onNodeRightClick(node => {
            rightClick(node);
        });

    myGraph = Graph;
}

function loadSeg() {
    const Graph = ForceGraph3D({
        controlType: 'trackball'
    }) // trackball, orbit or fly
    (document.getElementById('3d-graph'))
    .graphData(myData)
        .nodeLabel(node => node.id)
        .nodeAutoColorBy(node => node.type)
        .nodeVal(node => (node.metric + 0.5) * 4)
        .linkWidth(2)
        .linkOpacity(0.08)
        .linkAutoColorBy(link => link.type)
        .onNodeClick(node => {
            leftClick(node);
        })
        .onNodeRightClick(node => {
            rightClick(node);
        });

    myGraph = Graph;
}

function loadSeg4x() {
    const Graph = ForceGraph3D({
        controlType: 'trackball'
    }) // trackball, orbit or fly
    (document.getElementById('3d-graph'))
    .graphData(myData)
        .nodeLabel(node => node.id)
        .nodeAutoColorBy(node => node.type)
        .nodeVal(node => (node.metric + 0.5) * 4)
        .linkWidth(2)
        .linkOpacity(0.08)
        .linkAutoColorBy(link => link.type)
        .onNodeClick(node => {
            leftClick(node);
        })
        .onNodeRightClick(node => {
            rightClick(node);
        });

    myGraph = Graph;
}

function load3DDet() {
    const Graph = ForceGraph3D({
        controlType: 'trackball'
    }) // trackball, orbit or fly
    (document.getElementById('3d-graph'))
    .graphData(myData)
        .nodeLabel(node => node.id)
        .nodeAutoColorBy(node => node.type)
        .nodeVal(node => (node.metric + 0.5) * 4)
        .linkWidth(2)
        .linkOpacity(0.08)
        .linkAutoColorBy(link => link.type)
        .onNodeClick(node => {
            leftClick(node);
        })
        .onNodeRightClick(node => {
            rightClick(node);
        });

    myGraph = Graph;
}

function loadVideo() {
    const Graph = ForceGraph3D({
        controlType: 'trackball'
    }) // trackball, orbit or fly
    (document.getElementById('3d-graph'))
    .graphData(myData)
        .nodeLabel(node => node.id)
        .nodeAutoColorBy(node => node.type)
        .nodeVal(node => (node.metric + 0.5) * 4)
        .linkWidth(2)
        .linkOpacity(0.08)
        .linkAutoColorBy(link => link.type)
        .onNodeClick(node => {
            leftClick(node);
        })
        .onNodeRightClick(node => {
            rightClick(node);
        });

    myGraph = Graph;
}

function loadVideop() {
    const Graph = ForceGraph3D({
        controlType: 'trackball'
    }) // trackball, orbit or fly
    (document.getElementById('3d-graph'))
    .graphData(myData)
        .nodeLabel(node => node.id)
        .nodeAutoColorBy(node => node.type)
        .nodeVal(node => (node.metric + 0.5) * 4)
        .linkWidth(2)
        .linkOpacity(0.08)
        .linkAutoColorBy(link => link.type)
        .onNodeClick(node => {
            leftClick(node);
        })
        .onNodeRightClick(node => {
            rightClick(node);
        });

    myGraph = Graph;
}

function onSelectChanged() {
    var e = document.getElementById("gselect");
    var value = e.options[e.selectedIndex].value;
    var text = e.options[e.selectedIndex].text;
    document.getElementById("gtype").innerHTML = text;
    if (value == "1") {
        loadAllSettings();
    } else if (value == "2") {
        loadCls501000();
    } else if (value == "3") {
        loadCls50100();
    } else if (value == "4") {
        loadCls101000();
    } else if (value == "5") {
        loadCls10c();
    } else if (value == "6") {
        loadSeg();
    } else if (value == "7") {
        loadSeg4x();
    } else if (value == "8") {
        load3DDet();
    } else if (value == "9") {
        loadVideo();
    } else if (value == "10") {
        loadVideop();
    }
}

function updateGeometries() {
    sg.nodeRelSize(4); // trigger update of 3d objects in scene
}

function posterFormat(id) {
    return "<a id=\"link\" href=\"https://steamdb.info/app/" + id + "/info/\" target=\"_blank\"><img class=\"info\" src=\"img/" + id + ".jpg\" style=\"width:100%; \"></a>";
}

function tbodyFormat(node) {
    return "<tr class=\"row100 body\"><td class=\"cell100 column1\">" +
        node.id + "</td><td class=\"cell100 column2\">" +
        node.Name + "</td><td class=\"cell100 column3\">" +
        node.price + "</td><td class=\"cell100 column4\">" +
        node.company + "</td><td class=\"cell100 column5\">" +
        node.date + "</td><td class=\"cell100 column6\">" +
        node.Rating + "</td></tr>"
}

function openNavRight() {
    var x = document.getElementById("right-float");
    var y = document.getElementById("bottom-float");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "block";
    } else {
        x.style.display = "none";
        y.style.display = "none";
    }
}

function openNavLeft() {
    var x = document.getElementById("left-float");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function searchNode() {
    var id = document.getElementById("searchbar").value;
    var found = false;
    for (node of myData.nodes) {
        if (node.id == id) {
            const distance = 40;
            const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);

            myGraph.cameraPosition({
                    x: node.x * distRatio,
                    y: node.y * distRatio,
                    z: node.z * distRatio
                }, // new position
                node, // lookAt ({ x, y, z })
                3000 // ms transition duration
            );
            found = true;
            break;
        }
    }
    if (!found) {
        alert("Node not found!");
    }
}