fn build() -> Vec<u8> {
    use spirv_builder::SpirvBuilder;
    
    std::env::set_var("OUT_DIR", env!("OUT_DIR"));
    std::env::set_var("PROFILE", env!("PROFILE"));

    let path = SpirvBuilder::new(
        "debug-printf-panic/shader",
        "spirv-unknown-vulkan1.2",
    )
    .deny_warnings(true)
    .extension("SPV_KHR_non_semantic_info")
    .build()
    .unwrap()
    .module
    .unwrap_single()
    .to_path_buf();
    std::fs::read(path).unwrap()
}

fn to_asm(spirv: &[u32]) -> String {
    use spirv_tools::{assembler::Assembler, TargetEnv};

    let assembler = spirv_tools::assembler::create(Some(TargetEnv::Vulkan_1_2));
    assembler
        .disassemble(spirv, Default::default())
        .unwrap()
        .unwrap()
}

fn to_glsl(spirv: &[u32]) -> String {
    use spirv_cross::{
        glsl::Target as GlslTarget,
        spirv::{Ast, Module},
    };

    let module = Module::from_words(spirv);
    let mut ast = Ast::<GlslTarget>::parse(&module).unwrap();
    ast.compile().unwrap()
}

fn main() {
    let spirv = build();
    let spirv = bytemuck::cast_slice(spirv.as_slice());
    println!("{}", to_asm(spirv));
    println!("{}", to_glsl(spirv));
}
