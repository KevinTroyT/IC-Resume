actor {
    var nums = 0;
    public func getNum() : Nat {
        return nums;
    };
    public func thumbsUp() : async Nat{
        nums += 1;
        return nums;
    }
};
