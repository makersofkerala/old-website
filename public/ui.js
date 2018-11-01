const plotPoint = ([lat,lon]) => {

    const div = document.createElement("div");
    div.classList = "circle";
    div.style.left = lon + "px";
    div.style.top = lat + "px";

    return div;

}

const parseCoords = (c, {left, right, width, height}) => {

    let [sourceLat, sourceLon] = c.map(x => parseFloat(x));

    const geoJSON = [[74.865170,8.096045],[77.411942,8.096045],[77.411942,12.794469],[74.865170,12.794469],[74.865170,8.096045]];
    
    const [geoLon, geoLat] = geoJSON[3];

    const [geoWidth, geoHeight] = [geoJSON[2][0] - geoJSON[0][0], geoJSON[2][1] - geoJSON[0][1]];

    let normalLon = (sourceLon - geoLon) / geoWidth;
    let normalLat = (sourceLat - geoLat) / (geoHeight * -1);

    let resultantLat = (normalLat * height);
    let resultantLon = (normalLon * width);

    return [resultantLat, resultantLon];

};

const plotPoints = (points) => {

    const map = document.querySelector("#map img");

    let elements = document.querySelectorAll(".circle");

    for(let el of elements) el.parentNode.removeChild(el);

    let coords = (point) => parseCoords(point, map.getBoundingClientRect());
    
    points.map(p => {
	
	let point = coords(p);
	document.querySelector("#map").appendChild(plotPoint(point));
	
    });
    
}


const init = () => {

    const map = document.querySelector("#map img");

    const points = JSON.parse(map.dataset.points);

    map.onload = () => { plotPoints(points); }

    window.addEventListener("resize", () => plotPoints(points));
    
}

window.addEventListener("DOMContentLoaded", init);
