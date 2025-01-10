function twoSum(nums: number[], target: number): number[] {
    let my_dict: {[key: string] : number} = {};
    let answer: number[] = [];

    nums.forEach((item, i) => {
        if (my_dict[(target - item)] != undefined){
            answer.push(i);
            answer.push(my_dict[target-item])
        }
        else my_dict[item] = i;
    });
    return answer; 
};