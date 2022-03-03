let waterTrap = function(height)
	{
	
        let res=0; //result variable
      
        let n = height.length;
      // lMax[i] contains height of max bar to the
      // left of i'th bar
		let lMax = Array(n);
      // rMax[i] contains height of max bar to the
      // right of i'th bar
		let rMax = Array(n);
	//Fill the left array
		lMax[0] = height[0];
		for (let i = 1; i < n; i++)
			lMax[i] = Math.max(lMax[i - 1], height[i]);

	//Fill the right array
		rMax[n - 1] = height[n - 1];
		for (let i = n - 2; i >= 0; i--)
			rMax[i] = Math.max(rMax[i + 1], height[i]);

	
    // On i'th bar, the
    // amount of water accumulated 
    // will be equal to min(lMax[i], rMax[i]) - height[i] .
      
		for (let i = 1; i < n-1; i++)
			res += Math.min(lMax[i], rMax[i]) - height[i];

		return res;
	}
    
    //Sample Test Cases
	let arr = [ 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1 ];
    let arr2 = [4,2,0,3,2,5];	
    let ans = waterTrap(arr2);
    console.log(ans);