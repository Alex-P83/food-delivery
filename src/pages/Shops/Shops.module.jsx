const styles = {
    shopWrapper:{
        display:'flex',
        gap:'15px',
        height:`calc(100% - 112px)`,
        pb:'15px',
    },
    shopSidebar:{
        width:'400px',
        boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        borderRadius:'8px',
        p:'15px',
        overflowY:'auto',
        flexShrink:0,
    },
    shopContent:{
        position:'relative',
        boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        borderRadius:'8px',
        p:'15px',
        overflowY:'auto',
        flexGrow:1,
    },    
    tabItem:{
        maxWidth:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
       'svg':{
        width:'auto',
       },      
    },
    indicator:{
        '.MuiTabs-indicator':{
            width:'100%',
            background:`rgba(25,118,210,0.1)`,
            border:`1px solid #1976d2`,
            boxSizing:'border-box',
            borderRadius:'5px',        
        }
    },
    card:{
        'img':{
            width:'100%',
        }
    },
    progress:{
        position:'absolute',
        top:'50%',
        left:'50%',
        transform:'translate(-50% -50%)'
    }  
}

export default styles;