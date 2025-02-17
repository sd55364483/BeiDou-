var status = 0;

function start() {
    status = 0;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    }
    
    if (mode == 1) {
        status++;
    } else {
        status--;
        if (status < 0) {
            cm.dispose();
            return;
        }
    }

    // 等级检查
    if (cm.getPlayer().getLevel() < 50) {
        cm.sendOk("在你受傷以前，趕快離開吧。");
        cm.dispose();
        return;
    }

    switch (status) {
        case 0:
            cm.sendYesNo("你看起來很強的樣子，要不要去一趟巴洛古寺廟呢？");
            break;
        case 1:
            cm.warp(105100100);
            cm.dispose();
            break;
    }
}