**Observations in the problem:**
1. In the first and the last bar, water will not trapped, as there is no support.
2. Across each bar, it has been observed that the amount of water trapped is minimum of it's max(left height and right height) minus the height of the current bar. i.e min(height(left),height(right)) - arr[i].

**Approach:**
To compute the left max, we create an array lMax where we store maximum value from i=0 to i=n-1.
Similarly to compute the right max, we create an array rMax where we store maximum values from i=n-1 to i=0;
NOW we loop from i=1 to i=n-2, hence ignoring first and last bar, and keep adding the value of min(lMax[i]-rMax[i])-arr[i] and store it in a variable say 'res'.
We finally return res;

**Time and Space Complexity Analysis:**
1. Time: Since all the loops are linear,
hence **Time: O(n)**.
2. Space: Since we are storing the maximum values in two arrays each of size n,
hence **Space: O(n)**.


