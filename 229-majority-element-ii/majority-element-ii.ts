function majorityElement(nums: number[]): number[] {
    let my_dict: {[key: number]: number} = {}
    const size: number = Math.floor(nums.length / 3)
    let ans: number []  = []

    nums.forEach((item: number) => {
        if (my_dict.hasOwnProperty(item)) my_dict[item] += 1;
        else my_dict[item] = 1;
    });

    for (const [key, value] of Object.entries(my_dict)){
        if (value > size) ans.push(Number(key));
    };

    return ans;
};