var myGraph;
var myData;
var myControl;

init();

var x = document.getElementById("right-float");
var y = document.getElementById("bottom-float");
var z = document.getElementById("left-float");
x.style.display = "none";
y.style.display = "none";
z.style.display = "none";


function init() {
    let select_graph = document.getElementById("gselect");
    select_graph.addEventListener("change", onGraphChanged);

    let select_control = document.getElementById("cselect");
    select_control.addEventListener("change", onControlChanged);

    d3.json("data/all_settings_300.json").then(function (data) {
        myData = data;
        loadAllSettings();
        setTimeout(frozenGraph, 30000);
    });
}

function leftClick(node) {
    frozenGraph();
    lookNode(node);

    let mrows = "";
    for (link of myData.links) {
        if (link.source.id == node.id) {
            mrows += mrows_tbodyFormat(link);
        }
    }

    let same_structure = "";
    same_structure = same_structure_tbodyFormat(node);

    document.getElementById("name").innerHTML = node.id;
    document.getElementById("mrows").innerHTML = mrows;
    document.getElementById("same-structure").innerHTML = same_structure

    document.getElementById("input_channels").innerHTML = node.input_channels;
    document.getElementById("network_setting").innerHTML = node.network_setting;
    document.getElementById("last_channels").innerHTML = node.last_channels;
    document.getElementById("flops").innerHTML = node.flops;
    document.getElementById("params").innerHTML = node.params;
    document.getElementById("top1").innerHTML = node.top1;
    document.getElementById("top5").innerHTML = node.top5;
    document.getElementById("miou").innerHTML = node.miou;
    document.getElementById("macc").innerHTML = node.macc;
    document.getElementById("aacc").innerHTML = node.aacc;
    document.getElementById("moderate").innerHTML = node.moderate;
}

function loadAllSettings() {
    const Graph = ForceGraph3D({
        controlType: myControl,
        rendererConfig: {
            powerPreference: 'low-power'
        }
    }) // trackball, orbit or fly
    (document.getElementById('3d-graph'))
    .graphData(myData)
        .cooldownTime(30000)
        .nodeVal(node => (node.metric + 0.1) * 8)
        .nodeLabel(node => node.id)
        .nodeAutoColorBy(node => node.type)
        .linkWidth(2)
        .linkOpacity(0.08)
        .linkAutoColorBy(link => link.type)
        .onNodeClick(node => {
            leftClick(node);
        })

    Graph.d3Force('link').distance(link => link.length ** 2);

    myGraph = Graph;
}

function loadCls501000() {
    const Graph = ForceGraph3D({
        controlType: myControl,
        rendererConfig: {
            powerPreference: 'low-power'
        }
    }) // trackball, orbit or fly
    (document.getElementById('3d-graph'))
    .graphData(myData)
        .cooldownTime(30000)
        .nodeVal(node => (node.metric + 0.1) * 8)
        .nodeLabel(node => node.id)
        .nodeAutoColorBy(node => node.type)
        .linkWidth(2)
        .linkOpacity(0.08)
        .linkAutoColorBy(link => link.type)
        .onNodeClick(node => {
            leftClick(node);
        })

    Graph.d3Force('link').distance(link => link.length ** 2);

    myGraph = Graph;
}

function loadCls50100() {
    const Graph = ForceGraph3D({
        controlType: myControl,
        rendererConfig: {
            powerPreference: 'low-power'
        }
    }) // trackball, orbit or fly
    (document.getElementById('3d-graph'))
    .graphData(myData)
        .cooldownTime(30000)
        .nodeVal(node => (node.metric + 0.1) * 8)
        .nodeLabel(node => node.id)
        .nodeAutoColorBy(node => node.type)
        .linkWidth(2)
        .linkOpacity(0.08)
        .linkAutoColorBy(link => link.type)
        .onNodeClick(node => {
            leftClick(node);
        })

    Graph.d3Force('link').distance(link => link.length ** 2);

    myGraph = Graph;
}

function loadCls101000() {
    const Graph = ForceGraph3D({
        controlType: myControl,
        rendererConfig: {
            powerPreference: 'low-power'
        }
    }) // trackball, orbit or fly
    (document.getElementById('3d-graph'))
    .graphData(myData)
        .cooldownTime(30000)
        .nodeVal(node => (node.metric + 0.1) * 8)
        .nodeLabel(node => node.id)
        .nodeAutoColorBy(node => node.type)
        .linkWidth(2)
        .linkOpacity(0.08)
        .linkAutoColorBy(link => link.type)
        .onNodeClick(node => {
            leftClick(node);
        })

    Graph.d3Force('link').distance(link => link.length ** 2);

    myGraph = Graph;
}

function loadCls10c() {
    const Graph = ForceGraph3D({
        controlType: myControl,
        rendererConfig: {
            powerPreference: 'low-power'
        }
    }) // trackball, orbit or fly
    (document.getElementById('3d-graph'))
    .graphData(myData)
        .cooldownTime(30000)
        .nodeVal(node => (node.metric + 0.1) * 8)
        .nodeLabel(node => node.id)
        .nodeAutoColorBy(node => node.type)
        .linkWidth(2)
        .linkOpacity(0.08)
        .linkAutoColorBy(link => link.type)
        .onNodeClick(node => {
            leftClick(node);
        })

    Graph.d3Force('link').distance(link => link.length ** 2);

    myGraph = Graph;
}

function loadSeg() {
    const Graph = ForceGraph3D({
        controlType: myControl,
        rendererConfig: {
            powerPreference: 'low-power'
        }
    }) // trackball, orbit or fly
    (document.getElementById('3d-graph'))
    .graphData(myData)
        .cooldownTime(30000)
        .nodeVal(node => (node.metric + 0.1) * 8)
        .nodeLabel(node => node.id)
        .nodeAutoColorBy(node => node.type)
        .linkWidth(2)
        .linkOpacity(0.08)
        .linkAutoColorBy(link => link.type)
        .onNodeClick(node => {
            leftClick(node);
        })

    Graph.d3Force('link').distance(link => link.length ** 2);

    myGraph = Graph;
}

function loadSeg4x() {
    const Graph = ForceGraph3D({
        controlType: myControl,
        rendererConfig: {
            powerPreference: 'low-power'
        }
    }) // trackball, orbit or fly
    (document.getElementById('3d-graph'))
    .graphData(myData)
        .cooldownTime(30000)
        .nodeVal(node => (node.metric + 0.1) * 8)
        .nodeLabel(node => node.id)
        .nodeAutoColorBy(node => node.type)
        .linkWidth(2)
        .linkOpacity(0.08)
        .linkAutoColorBy(link => link.type)
        .onNodeClick(node => {
            leftClick(node);
        })

    Graph.d3Force('link').distance(link => link.length ** 2);

    myGraph = Graph;
}

function load3DDet() {
    const Graph = ForceGraph3D({
        controlType: myControl,
        rendererConfig: {
            powerPreference: 'low-power'
        }
    }) // trackball, orbit or fly
    (document.getElementById('3d-graph'))
    .graphData(myData)
        .cooldownTime(30000)
        .nodeVal(node => (node.metric + 0.1) * 8)
        .nodeLabel(node => node.id)
        .nodeAutoColorBy(node => node.type)
        .linkWidth(2)
        .linkOpacity(0.08)
        .linkAutoColorBy(link => link.type)
        .onNodeClick(node => {
            leftClick(node);
        })

    Graph.d3Force('link').distance(link => link.length ** 2);

    myGraph = Graph;
}

function loadVideo() {
    const Graph = ForceGraph3D({
        controlType: myControl,
        rendererConfig: {
            powerPreference: 'low-power'
        }
    }) // trackball, orbit or fly
    (document.getElementById('3d-graph'))
    .graphData(myData)
        .cooldownTime(30000)
        .nodeVal(node => (node.metric + 0.1) * 8)
        .nodeLabel(node => node.id)
        .nodeAutoColorBy(node => node.type)
        .linkWidth(2)
        .linkOpacity(0.08)
        .linkAutoColorBy(link => link.type)
        .onNodeClick(node => {
            leftClick(node);
        })

    Graph.d3Force('link').distance(link => link.length ** 2);

    myGraph = Graph;
}

function loadVideop() {
    const Graph = ForceGraph3D({
        controlType: myControl,
        rendererConfig: {
            powerPreference: 'low-power'
        }
    }) // trackball, orbit or fly
    (document.getElementById('3d-graph'))
    .graphData(myData)
        .cooldownTime(30000)
        .nodeVal(node => (node.metric + 0.1) * 8)
        .nodeLabel(node => node.id)
        .nodeAutoColorBy(node => node.type)
        .linkWidth(2)
        .linkOpacity(0.08)
        .linkAutoColorBy(link => link.type)
        .onNodeClick(node => {
            leftClick(node);
        })

    Graph.d3Force('link').distance(link => link.length ** 2);

    myGraph = Graph;
}

function onGraphChanged() {
    let e = document.getElementById("gselect");
    let value = e.options[e.selectedIndex].value;
    let text = e.options[e.selectedIndex].text;
    document.getElementById("gtype").innerHTML = text;
    if (value == "1") {
        d3.json("data/all_settings_300.json").then(function (data) {
            myData = data;
            loadAllSettings();
            setTimeout(frozenGraph, 30000);
        });
    } else if (value == "2") {
        d3.json("data/cls-50-1000.json").then(function (data) {
            myData = data;
            loadCls501000();
            setTimeout(frozenGraph, 30000);
        });
    } else if (value == "3") {
        d3.json("data/cls-50-100.json").then(function (data) {
            myData = data;
            loadCls50100();
            setTimeout(frozenGraph, 30000);
        });
    } else if (value == "4") {
        d3.json("data/cls-10-1000.json").then(function (data) {
            myData = data;
            loadCls101000();
            setTimeout(frozenGraph, 30000);
        });
    } else if (value == "5") {
        d3.json("data/cls-10c.json").then(function (data) {
            myData = data;
            loadCls10c();
            setTimeout(frozenGraph, 30000);
        });
    } else if (value == "6") {
        d3.json("data/seg.json").then(function (data) {
            myData = data;
            loadSeg();
            setTimeout(frozenGraph, 30000);
        });
    } else if (value == "7") {
        d3.json("data/seg-4x.json").then(function (data) {
            myData = data;
            loadSeg4x();
            setTimeout(frozenGraph, 30000);
        });
    } else if (value == "8") {
        d3.json("data/3ddet.json").then(function (data) {
            myData = data;
            load3DDet();
            setTimeout(frozenGraph, 30000);
        });
    } else if (value == "9") {
        d3.json("data/video.json").then(function (data) {
            myData = data;
            loadVideo();
            setTimeout(frozenGraph, 30000);
        });
    } else if (value == "10") {
        d3.json("data/video-p.json").then(function (data) {
            myData = data;
            loadVideop();
            setTimeout(frozenGraph, 30000);
        });
    }
}

function onControlChanged() {
    let e = document.getElementById("cselect");
    let value = e.options[e.selectedIndex].value;
    if (value == "1") {
        myControl = "trackball";
    } else if (value == "2") {
        myControl = "fly";
    }

    onGraphChanged();
}

function mrows_tbodyFormat(link) {
    return "<tr class=\"row100 body\"><td class=\"column1\" style=\"cursor:pointer;color:deepskyblue\" onclick=\"findNode(this)\">" +
        link.target.id + "</td><td class=\"column2\">" +
        link.target.flops + "</td><td class=\"column2\">" +
        link.target.params + "</td><td class=\"column2\">" +
        link.target.top1 + "</td><td class=\"column2\">" +
        link.target.top5 + "</td><td class=\"column2\">" +
        link.target.miou + "</td><td class=\"column2\">" +
        link.target.macc + "</td><td class=\"column2\">" +
        link.target.aacc + "</td><td class=\"column2\">" +
        link.target.moderate + "</td></tr>"
}

function same_structure_tbodyFormat(node) {
    let count = 0;
    let c = 2;
    let tbody = ""; // `c` columns and dynamic rows

    for (n of myData.nodes) {
        if (n.network_setting == node.network_setting) {
            if (count % c == 0) { // a new row
                tbody += "<tr>"
            }

            count += 1
            td = "<td height=\"30px\" style=\"cursor:pointer;color:deepskyblue\" onclick=\"findNode(this)\">" + n.id + "</td>"
            tbody += td

            if (count % c == 0) { // last columns
                tbody += "</tr>"
            }
        }
    }
    if (count % c != 0) { // last but unfilled row
        tbody += "</tr>"
    }

    return tbody;
}

function openNavRight() {
    let x = document.getElementById("right-float");
    let y = document.getElementById("bottom-float");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "block";
    } else {
        x.style.display = "none";
        y.style.display = "none";
    }
}

function openNavLeft() {
    let x = document.getElementById("left-float");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function searchNode() {
    let id = document.getElementById("searchbar").value;
    let found = false;
    for (node of myData.nodes) {
        if (node.id == id) {
            leftClick(node);
            found = true;
            break;
        }
    }
    if (!found) {
        alert("Node not found!");
    }
}

function searchNodebyStructure() {
    let structure = document.getElementById("searchbar-2").value;
    let found = false;
    for (node of myData.nodes) {
        if (node.structure == structure) {
            leftClick(node);
            found = true;
            break;
        }
    }
    if (!found) {
        alert("Structure not found!");
    }
}

function findNode(td) {
    let id = td.innerText;
    let found = false;
    for (node of myData.nodes) {
        if (node.id == id) {
            leftClick(node);
            found = true;
            break;
        }
    }
    if (!found) {
        alert("Node not found!");
    }
}

function lookNode(node) {
    const distance = 60;
    const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);

    myGraph.cameraPosition({
            x: node.x * distRatio,
            y: node.y * distRatio,
            z: node.z * distRatio
        }, // new position
        node, // lookAt ({ x, y, z })
        3000 // ms transition duration
    );
}

function frozenGraph() {
    myGraph.cooldownTicks(0);
}