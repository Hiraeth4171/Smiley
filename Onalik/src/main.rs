use subprocess as sb;

enum S_ProcessType {
    GUI,
    Bot,
    Music,
    Website,
}

struct S_Process {
    id: u8,
    process_type: S_ProcessType,
    pid: str,
}

fn main() {
    // ONALIK
}

// let result = sb::Exec::shell("echo hi").join();