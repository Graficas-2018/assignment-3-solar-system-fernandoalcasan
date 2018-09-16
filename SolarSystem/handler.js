
// An integer value, in pixels, indicating the X coordinate at which the mouse pointer was located when the event occurred.
var mouseRDown = false, mouseLDown = false, pageX = 0, pageY = 0;

function rotateScene(deltax, deltay)
{
    solarsystem.rotation.y += deltax / 100;
    solarsystem.rotation.x += deltay / 100;
    $("#rotation").html("rotation: " + solarsystem.rotation.x.toFixed(1) + "," + solarsystem.rotation.y.toFixed(1) + ",0");

}

function moveSystem(deltax, deltay)
{
    solarsystem.position.x += deltax / 50;
    solarsystem.position.y -= deltay / 50;
}

function scaleScene(scale)
{
    solarsystem.scale.set(scale, scale, scale);
    $("#scale").html("scale: " + scale);
}

function onMouseMove(evt)
{
    if (!mouseRDown && !mouseLDown)
      return;

    // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
    evt.preventDefault();

    var deltax = evt.pageX - pageX;
    var deltay = evt.pageY - pageY;
    pageX = evt.pageX;
    pageY = evt.pageY;

    if(mouseLDown)
    {
      rotateScene(deltax, deltay);
    }
    else if(mouseRDown)
    {
      moveSystem(deltax, deltay);
    }
}

function onMouseDown(evt)
{
    evt.preventDefault();

    pageX = evt.pageX;
    pageY = evt.pageY;

    if(evt.button == 0)
    {
      mouseLDown = true;
    }
    else if(evt.button == 1)
    {
      solarsystem.position.set(0,0,0);
      solarsystem.rotation.set(0,0,0);
    }
    else if(evt.button == 2)
    {
      mouseRDown = true;
    }
}

function onMouseUp(evt)
{
    evt.preventDefault();

    if(evt.button == 0)
    {
      mouseLDown = false;
    }
    else if(evt.button == 2)
    {
      mouseRDown = false;
    }
}

function addMouseHandler(canvas)
{
  canvas.oncontextmenu = function(e){ e.preventDefault(); };
    canvas.addEventListener( 'mousemove',
            function(e) { onMouseMove(e);}, false );
    canvas.addEventListener( 'mousedown',
            function(e) { onMouseDown(e);}, false );
    canvas.addEventListener( 'mouseup',
            function(e) { onMouseUp(e);}, false );
}
