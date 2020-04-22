<!DOCTYPE html>
<html>
<head>

	<title>Marking 3 locations on the map</title>

	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- below link is attached to obtain some in built css style which make website responsive  -->
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<!-- beow link is attached to obtain some styles from leaflet.js-->
		<link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==" crossorigin=""/>
<!-- below js file is sttached to obtain inbuilt leaflet.js function -->
		<script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js" integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew==" crossorigin=""></script>



</head>
<body >

<header style="text-align: center;">
<h3>
	Marking 3 locations on the map
</h3>
<hr>
</header>
<div class="container">
  <div class="row">
    <div class="col-sm-3">
				<h3>Context</h3>
				<ul>
					<li><h4><b>Circle</b> resembles to the small area or a teritory</h4>
					<li><h4><b>Marker</b> resembles to the exact city</h4>
					<li><h4><b>Triangle</b> resembles to the area of whole state</h4>
				</ul>
				<h5>NOTE</h5>
				<p>
					This figures estimated by me depending on the shape of their area.
				</p>
  	</div>
    <div class="col-sm-9">
			<div id="mapid" style="width: 100%; height: 650px;"></div>
		</div>
  </div>
</div>
</div>
<!-- below js file is jvasscript coded file to cutomize the map -->
<script src="./marking_map.js"></script>
</body>
</html>
