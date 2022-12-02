function addOption(selectbox,text,value )
{
	var optn = document.createElement("OPTION");
	optn.text = text;
	optn.value = value;
	selectbox.options.add(optn);
}

function addOption_list(){


for (var i=0; i < locationsArray.length;++i){
addOption(document.drop_list.Location_list, locationsArray[i], locationsArray[i]);
}

for (var i=0; i < parkTypesArray.length;++i){
    addOption(document.drop_list.park_list, parkTypesArray[i], parkTypesArray[i]);
    }

}
addOption_list();