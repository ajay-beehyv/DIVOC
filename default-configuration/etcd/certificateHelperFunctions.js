return {
    loud: function (aString) { return aString.toString().toUpperCase() },
    small: function (aString) { return aString.toString().toLowerCase() },
    formatissueDate: function(givenDate) {
   
        options = {
            timeZone: 'Asia/Manila'
        };
        let isdate = new Date(givenDate).toLocaleDateString('en-US', options).split('/');
        let day = isdate[1];
        const monthNames = [
            "Jan", "Feb", "Mar", "Apr",
            "May", "Jun", "Jul", "Aug",
            "Sep", "Oct", "Nov", "Dec"
        ];
        let monthName = monthNames[parseInt(isdate[0])-1];
        let year = isdate[2];
        
        optionstime = {hour: '2-digit', minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Manila'  
             };
        let istime = new Date(givenDate).toLocaleTimeString('en-US', optionstime)
    
        return `${String(day).padStart(2, '0')}-${monthName}-${year} ${istime}`;
    },
    formatDate: function(givenDate) {
        const dob = new Date(givenDate);
        let day = dob.getDate();
        const monthNames = [
            "Jan", "Feb", "Mar", "Apr",
            "May", "Jun", "Jul", "Aug",
            "Sep", "Oct", "Nov", "Dec"
        ];
        let monthName = monthNames[dob.getMonth()];
        let year = dob.getFullYear();
    
        return `${String(day).padStart(2, '0')}-${monthName}-${year}`;
    },
    
    IfBoosterAvl: function(bool1, data1, data2){
        return bool1? data1 : data2;
    },
    BoosterNdDose2Avl: function(bool1, bool2, data1, data2){
        return (bool1 && bool2) ? data1 : data2;
    },
    parse: function(raw){
        return JSON.parse(raw);
    } 
};