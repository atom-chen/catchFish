import {FishType} from "./Interface";
import MyGlobal from "./MyGlobal";

// 公共类
export default class Utils {

    private constructor() {
    }

    // 鱼游动的贝塞尔曲线
    public static bezierArray: cc.Vec2[][] = [
        [cc.v2(50, -100), cc.v2(300, -400), cc.v2(1800, -650)],
        [cc.v2(100, -200), cc.v2(400, -300), cc.v2(1800, -600)],
        [cc.v2(150, -300), cc.v2(600, -400), cc.v2(1800, -500)],
        [cc.v2(50, 50), cc.v2(400, 100), cc.v2(1800, 200)],
        [cc.v2(80, 200), cc.v2(300, 500), cc.v2(1800, 650)],
        [cc.v2(100, 100), cc.v2(350, 400), cc.v2(1800, 500)],
        [cc.v2(100, 2), cc.v2(350, -2), cc.v2(1800, 0)]
    ]

    // 鱼的配置属性
    public static fishType: FishType[] = [
        {
            "name": "000",
            "hp": 4,
            "gold": 2
        },
        {
            "name": "001",
            "hp": 8,
            "gold": 6
        },
        {
            "name": "002",
            "hp": 12,
            "gold": 10
        },
        {
            "name": "003",
            "hp": 16,
            "gold": 13
        },
        {
            "name": "004",
            "hp": 20,
            "gold": 17
        },
        {
            "name": "005",
            "hp": 24,
            "gold": 20
        },
        {
            "name": "006",
            "hp": 28,
            "gold": 22
        },
        {
            "name": "007",
            "hp": 32,
            "gold": 25
        },
        {
            "name": "008",
            "hp": 36,
            "gold": 27
        },
        {
            "name": "009",
            "hp": 40,
            "gold": 30
        },
    ]

    /**
     * 从对象池中取节点
     * @param nodePool 节点池
     * @param prefab 预制体
     */
    public static getPoolNode(nodePool: cc.NodePool, prefab: cc.Prefab): cc.Node {
        let fish: cc.Node = null;
        if (nodePool.size() > 0) {
            fish = nodePool.get();
        } else {
            fish = cc.instantiate(prefab);
        }
        return fish;
    }

    /**
     * 把鱼放回池中
     * @param node 节点
     * @param nodePool 对象池
     */
    public static putPoolNode(node: cc.Node, nodePool: cc.NodePool): void {
        nodePool.put(node);
    }

    // 检测游戏是否结束
    public static testGameOver(): boolean {
        return MyGlobal.hasGold <= 0 && MyGlobal.bulletCount <= 0;
    }
}