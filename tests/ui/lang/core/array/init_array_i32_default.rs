// Test creating an array.
// build-pass

use spirv_std::macros::spirv;

#[spirv(fragment)]
pub fn main(o: &mut i32) {
    let array = <[i32; 1]>::default();
    *o = array[0];
}
