export async function getVans(){
    const res = await fetch('/api/vans')
    if(!res.ok){
        throw{
            message: "failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}
export async function getVan(vanid){
    const res = await fetch(`/api/vans/${vanid}`)
    if(!res.ok){
        throw{
            message: `failed to fetch van data for van ID: ${vanid}`,
            statusText: res.statusText,
            status: res.status
        }
    }
    
    const data = await res.json()
    return data.vans 
}

export async function getHostVans(){
    const res = await fetch('/api/host/vans')
    if(!res.ok){
        throw{
            message: 'failed to fetch host vans',
            statusText: res.statusText,
            status: res.status
        }        
    }
    const data = await res.json()
    return data.vans
}

export async function getHostVan(vanid){
    const res = await fetch(`/api/host/vans/${vanid}`)
    if(!res.ok){
        throw{
            message: 'failed to fetch host van',
            statusText: res.statusText,
            status: res.status
        }        
    }
    const data = await res.json()
    return data.vans
}

