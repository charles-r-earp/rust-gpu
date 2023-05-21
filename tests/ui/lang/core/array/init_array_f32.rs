// Test creating an array.
// build-pass

use spirv_std::macros::spirv;

#[spirv(fragment)]
pub fn main(o: &mut f32) {
    let array = [0f32; 1];
    *o = array[0];
}
