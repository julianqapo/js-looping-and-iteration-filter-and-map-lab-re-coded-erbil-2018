// Code your solution here:
function driversWithRevenueOver(driver, r){
let x =driver.filter(function(v) {if (v.revenue > r){return driver}
})
return x
}


function driverNamesWithRevenueOver(d, r){
  let driverName =[]
  let x = d.filter(function(v){
    if (r < v.revenue){
      driverName.push(v.name)
    }
  })
  return driverName
}


function exactMatch(d, {x:y}){
let z = d.filter(function(v){
  if (x.y == v.x){
    return d
  }
})
return z
}
