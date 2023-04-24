#![no_std]
#![feature(asm_experimental_arch)]

use spirv_std::macros::spirv;

#[spirv(compute(threads(1)))]
pub fn main() {
    unsafe {
        spirv_std::macros::debug_printfln!();
    }
    // panic becomes infinite loop, normally optimized away
    // but with debug_printf it is not.
    panic!();
}
