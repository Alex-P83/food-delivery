const styles = {
    wrapper:{
        height:`calc(100% - 112px)`,
        pb:'15px',
        display:'flex',
        flexDirection:'column'
    }, 
    historyList:{
      borderRadius:'4px',
      boxShadow: `0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);`,
      p:'15px',
      overflowY:'auto'
    },
    historyItem:{
      borderRadius:'4px',
      boxShadow: `0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);`,
      p:'15px',      
    },
    historyTotalPrice:{
      width:'300px',
      flexShrink:1,
      p:'15px',
    },
    form:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      p:'15px',
      mb:'15px',
      borderRadius:'4px',
      boxShadow: `0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);`,
      background:`rgba(0,100,10,0.04)`,       
    },
    input:{
        width:'100%',
        maxWidth:'500px',
        background:'#fff',
        "&:not(:last-child)":{
          mb:'15px',
        }
    },
    card:{
        width:'100%',
        'img':{
            width:'250px',
            height:'250px',
            objectFit:'cover',
        }
    }, 
    cardContent:{
      display:'flex',
      alignItems:'center'
    }     
}

export default styles;