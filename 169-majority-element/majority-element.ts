function majorityElement(nums: number[]): number {
    let candidate: number = -1
    let votes: number = 0

    for(let i of nums){
        if (votes == 0){
            candidate = i;
            votes++;
        }
        else{
            if (i == candidate) votes++;
            else votes--;
        }
    }

    let count: number = 0;
    for(let i of nums){
        if (candidate == i) count++;
        
    }

    if (count > nums.length / 2) return candidate;
    else return -1;
};