let defaultState = {
	ltype: null
}
module.exports = (state=defaultState,action)=>{
	switch(action.type){
		case "LTYPE": 
		return{
			ltype: action.ltype,
		}
		default: 
		return state
	}
}