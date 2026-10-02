# 类脑芯片市场报告

数据快照：2026年10月2日，事件视觉与多模态采集模组专题已同步。先查看覆盖分布、34组产品证据阶段、BrainChip收入与现金指标、并购退出追溯及20项关键事件，点击分类追溯公司／产品编号及来源；下方保留竞争地图的公司选择与证据缺口。统计仅代表报告覆盖样本，竞争关系和阶段归类为分析判断，原始证据章节可按需展开。 [GitHub图表与报告副本](https://github.com/v5qqskzkhj-ship-it/neuromorphic-market-report)已发布2026年10月2日快照；仓库为私有，需登录拥有访问权限的GitHub账号。

[打开交互竞争地图](dashboard.html)

**核心判断：市场正在分化为低功耗传感、事件视觉、具身触觉、科研计算以及高能效大模型推理几条路径。竞争单位逐渐从单颗芯片扩展到模组、工具链和垂直应用系统。**这是本报告基于下述资料的分析，不是行业统计结论。

### 图表数据与追溯口径 2026年10月2日

统计来自本报告当前覆盖样本，不代表行业规模、市场份额或穷尽企业数。主体和产品采用不同分母：35个主体、34组重点产品；产品阶段是按公开证据进行的分析归类，不等于统一成熟度认证。图中点击分类可查看编号、来源、证据类型和缺口。另列两项科研记录，研究品牌不计作新增公司；相邻替代专题新增5个主体与7组产品证据，按芯片、开发板和分销状态分开记录。

| 主体层次 | 覆盖数量 |
|---|---:|
| 硬件与平台 | 11 |
| 模型与系统 | 6 |
| 相邻替代 | 18 |

| 产品证据阶段 | 数量 | 产品证据编号 |
|---|---:|---|
| 方案／研发 | 3 | P004、P018、P021 |
| 研究／原型 | 1 | P009 |
| 工程样片 | 2 | P012、P019 |
| IP／商务接洽 | 5 | P010、P015、P016、P020、P022 |
| 开发平台 | 1 | P003 |
| 客户评估／模块 | 5 | P002、P007、P008、P013、P031 |
| 可采购硬件 | 8 | P001、P005、P006、P026、P027、P028、P029、P030 |
| 商品页／售罄 | 1 | P034 |
| 生产／部署声明 | 6 | P011、P014、P017、P024、P025、P032 |
| 发布／演示 | 1 | P023 |
| 科研部署已确认 | 1 | P033 |

“生产／部署声明”保留厂商或报道宣称属性，不将其等同于经核验销售收入；可采购相机、模块及开发板不等于裸芯片批量出货。20个关键事件另以T001–T020编号，事件日、发布日期、检索日期分别列示；未知日期留空；T018与T019只确认部署月份，不补造具体日。T020记录标签关联提交日，不替代镜像实际推送日。“科研部署已确认”指使用方公开确认系统到货／运行，仍不等同供应商已收款或确认收入。“商品页／售罄”表示存在正式SKU、价格和规格，但检索时不可下单；不等同当前供货或已核实出货。C001–C035为主体编号，P001–P034为产品证据编号。收入图只比较BrainChip集团2025H1与2026H1公开收入构成，不跨厂商排名；收入、客户收款、现金、生产批次、客户出货、融资和并购分别记录。R001–R002单列研究验证，不计入34组产品分母；“发布／演示”避免将已发布芯片误写成量产。

[下载图表与证据数据（Excel）](market-evidence.xlsx)：包含图表汇总、主体证据、产品阶段、事件与财务四个表页，可按编号筛选并打开原始URL。来源可读状态及事实／厂商宣称／分析／未知边界沿用当前报告；本轮补入OpenMV／Prophesee生态的多光谱事件相机模组，新增P034并单列为“商品页／售罄”；共35个主体、34组产品、20项关键事件、6项并购／整合记录和2项研究。公开价格、库存状态、出货、客户和收入分开记录。

本报告是一份可持续更新的市场底稿，不宣称已穷尽互联网。付费数据库、未公开合同、闭源技术及未索引页面可能无法获得。没有证据的收入、客户和市场份额保持未知。

## 市场边界与证据口径

| 类别 | 纳入内容 | 统计与比较原则 |
|---|---|---|
| 核心类脑计算 | SNN、事件驱动神经计算、可编程神经动力学、相关在线学习硬件 | 比较模型、任务、存储和工具链，不只比较神经元数量 |
| 类脑感知 | 事件视觉、感算融合、神经信号感知 | 与计算芯片分开，不把事件传感器自动视为SNN处理器 |
| 相邻计算路线 | 模拟神经计算、SRAM存算一体、动态稀疏数据流 | 纳入替代竞争；技术名词不同，不强行统一为SNN |
| 系统与应用 | 触觉模组、反无人机、工业监测、科研类脑计算机 | 识别实际销售产品与采购主体 |
| 传统端侧AI | MCU、DSP、NPU及成熟视觉SoC | 是预算替代者；不能用整个端侧AI市场充当类脑市场 |

证据状态统一为：研究验证、工程样片、开发平台可用、客户评估、厂商宣布生产出货、可核实收入。后几项并不自动证明大规模量产。厂商性能数字标明厂商口径；不在缺乏相同任务、精度和系统边界时横向排名。

## 市场规模与分布

### 数字存在显著口径冲突

| 来源与口径 | 公开数字 | 可以如何使用 |
|---|---|---|
| Mordor Intelligence，Neuromorphic Chip | 2025年3.4亿美元；2026年预测5.1亿美元；2031年预测40.8亿美元 | 第三方芯片市场估计，不能等同已核实出货收入 |
| Grand View Research，Neuromorphic Computing | 2023年53亿美元；2026年预测113亿美元；2030年预测203亿美元 | 更广的计算市场口径；公开页面不足以解释与芯片口径的全部差额 |

两者2026年数字相差约22倍，不能取平均或拼成一条增长曲线。当前更可靠的工作方式是同时维护市场机构预测和企业收入证据，并逐步核对样本、产品边界和方法。来源：[Mordor](https://www.mordorintelligence.com/industry-reports/neuromorphic-chip-market)、[Grand View Research](https://www.grandviewresearch.com/industry-analysis/neuromorphic-computing-market)。

Mordor报告称2025年数字处理器占43.56%，航空航天与国防占29.73%；这是该机构分类下的估计。Grand View的北美37.3%、图像处理45.5%均为2023年数据，不能当作2026年份额。公开资料尚不足以建立可信的全球公司销售份额榜。

### 地区供应布局

下表是本次识别到的供应与研究布局，不是收入占比排名。企业地域以研发与运营布局理解，不能简单等同销售地域。

| 地区 | 已识别主体 | 本次资料反映的方向 |
|---|---|---|
| 中国 | 时识、灵汐、九天睿芯、他山、脑智算芯、浙大达尔文体系；新增维泛智能、具脑磐石、最终序列、WorldMind，模型与系统层单列 | 感算融合、触觉、脑机接口、ANN与SNN融合、系统级计算 |
| 欧洲 | Innatera、Prophesee、SpiNNcloud、Synthara | 传感微控制器、事件视觉整机、类脑计算系统、存算IP |
| 美国及澳大利亚跨区 | Intel、BrainChip、Aspinity、Rain、MemryX；World Labs按模型／系统层单列 | 科研平台、数字类脑IP、模拟前端、存算与视觉推理；空间世界模型与机器人仿真 |
| 加拿大 | Blumind；Aspirare为待核实线索 | 模拟AI与常开传感 |
| 印度及其他区域 | Innatera开发与方案伙伴；Kumrah AI与iniVation合作线索 | 生态与系统开发，尚不能由合作新闻推断芯片销售规模 |

供应主体的产品证据见下文。印度与中东合作线索来自[Innatera伙伴部署说明](https://www.innatera.com/newsroom/neuromorphic-enters-the-mainstream-with-innateras-pulsar-chip-at-embedded-world-2026/)与[SynSense新闻页](https://www.synsense.ai/news/)。

### 按需求划分的市场分布

| 应用 | 购买需求 | 已识别供给 | 当前判断与缺口 |
|---|---|---|---|
| 常开音频及人体存在检测 | 电池寿命、误触发、响应速度 | Innatera／Joya EdgeCore、SynSense、POLYN、Blumind、Aspinity | Innatera已有客户模块证据；Aspinity AML100为生产IC；POLYN已有工程芯片与评估申请。Blumind仍为联系式获取，均需核实终端批量、复购和收入 |
| 工业异常、机器视觉与预测维护 | 本地判断、减少传输、长期可靠性 | MemryX、Innatera伙伴、POLYN、Aspinity、Synthara | MemryX已出现Express LUCK具名生产线部署，成熟度领先于仅评估；POLYN VibroSense IIOT仍为仿真原型且商务暂停；Synthara为硅验证IP。应比较整套系统，不只看计算核心 |
| 车载与机器人边缘AI | 功耗、确定性、功能安全、长期供货 | Mythic／Honda、MemryX、REEXEN、传统NPU | 本田与Mythic为联合开发未来车载SoC，不是当前量产定点；Videantis既有汽车装机属于被收购数字IP。MemryX有工厂部署但未见汽车量产，REEXEN具公司口径订单但客户未具名 |
| 车载胎压与路面附着估计 | 胎内低功耗、实时响应、车辆接口与可靠性 | POLYN VibroSense TMS | 2026年9月28日公司称工程传感节点开始供潜在客户评估；未披露具名评估方、订单、汽车认证、量产数量或收入 |
| 动态视觉及XR | 高速运动、低延迟、事件数据 | Prophesee／Sony IMX636／637伙伴相机；iniVation相机；SynSense Speck／Aeveon | IDS相机有现货／系列生产证据，LUCID称Triton2 EVS已发货；iniVation当前网店列公开价格。OpenMV的400美元GenX320模组与500美元多光谱事件相机模组均有正式SKU但检索时售罄；后者同步集成GenX320事件流与1MP／120 FPS彩色全局快门。Aeveon仅见发布、询价与宣传目录，未见公开数据表、开发板、价格或库存；商品页与可采购相机均不等于事件传感器或SNN芯片收入 |
| 无人机与防务感知 | 低载荷功耗、高速目标检测 | Prophesee Mantara／Terranet BlincVision；Aspinity；Mythic；AnalogAI；Grayscale AI、Neurobus为系统线索 | Aspinity AML100可部署但AML200仍为测试芯片；Mythic M1可联系评估；AnalogAI仅到IP选型。Prophesee称Mantara已现场验证，Terranet为评估协议；均需量产订单与部署证据 |
| 机器人触觉和数据采集 | 接触、滑移、力反馈、多模态数据 | 他山／奥比中光；SynSense Speck2f研究生态 | 他山已有E10A发布、NVIDIA仿真资产与合作方数采协议，传感器月交付数万枚仍为公司／媒体口径；Speck2f已有直接触觉事件推理研究。两者均不能推断世界模型训练增益或量产芯片收入 |
| 生物电与脑机接口 | 通道、发热、实时解码 | SynSense | 厂商布局明确；采集、检测和临床获批是不同状态 |
| 科研、脑仿真与数值计算 | 神经动力学、在线学习、系统扩展与物理计算 | Intel、SpiNNcloud、达尔文、灵汐 | Sandia确认SpiNNaker2部署并开展热流随机游走模拟；莱比锡系统已运行，药物项目含int8 DNN。科研部署不等同端侧量产、付费确认或世界模型训练 |
| 传统低功耗MCU／DSP／NPU | 熟悉工具链、接口集成、供货与BOM | ST STM32N6、NXP i.MX RT700、Synaptics SL2610、Hailo-10H、Ambiq Apollo510 | ST、NXP开发硬件已有现货或直购证据，Synaptics和Hailo有分销或订单入口，Ambiq评估板有现货而Apollo510 Lite芯片仍待到货。公开资料聚焦模型编译与推理，未见可比的片上在线权重更新；不能跨模型比较功耗 |
| 大模型推理 | 权重搬运、KV Cache、能效 | SpiNNcloud、九天睿芯、脑智算芯；Hailo-10H、Synaptics SL2610、Mythic、Rain、Synthara相邻 | Hailo-10H已有商业订单入口，SL2610开发套件有分销链接；九天睿芯HBF／ADA300／400仍按官网方案与路线记录。类脑标签不能证明优于成熟加速器，需核对模型、精度、内存和整机功耗 |

上述应用判断是对企业公开产品定位的归纳；各主体事实来源见竞争矩阵。

## 核心竞争对手矩阵

| 主体 | 路线与产品 | 最新核实内容 | 商业化状态及重要缺口 |
|---|---|---|---|
| BrainChip | 全数字事件驱动Akida；芯片、模块及IP | 监管半年报确认首批2000颗AKD1500已收货并进入商业规模制造，且最终产量因良率低于预期预计略低于计划；ASICLAND获非独家IP分销许可；Orama.AOI被公司称为工业检测参考部署；M.2、PCIe与BrainBoard1500仍有公开采购路径 | 2000颗是BrainChip收到的首批生产批次，不是已核客户出货。ASICLAND生产许可需逐客户另批并付费；Orama未披露终端工厂、订单、数量或收入。AKD1500单独收入、版税和客户名单未知 |
| Innatera | Pulsar异构微控制器，含SNN、RISC-V、CNN及FFT | 2026年3月Joya发布Pulsar驱动的EdgeCore可集成音频模块；6月Innatera官网明确称Joya为客户；Synfire于6月29日发布0.0.2 Beta包 | 已越过仅演示阶段进入客户模块与公开工具链；尚未核实终端零售出货、芯片数量、合同额或收入 |
| SynSense时识／iniVation | Speck感算一体SNN、Aeveon高速视觉路线、iniVation事件相机及Rigi神经信号采集 | SynSense于2024年2月1日宣布其母公司收购iniVation 100%股份，苏黎世实体继续运营并服务原客户；参投方另确认2026年数亿元B轮及视觉产品批量订单口径 | iniVation已不是独立所有权主体，但品牌和运营实体仍在；交易金额未披露。融资不等于收入，订单未披露型号、客户、数量、金额、交付或收入，不能直接映射为Aeveon、Speck或iniVation相机 |
| Prophesee | 事件视觉传感、软件及整机 | Sony IMX636／637伙伴相机出现现货、系列生产或发货证据；OpenMV GenX320模组商品页检索时售罄；6月15日推出Mantara、Hearth并宣布2000万欧元融资 | 事件相机生态已越过样片进入公开采购／系列生产，但不等于Prophesee传感器销量或收入；Mantara仅有公司“现场验证”口径。OpenEB仍公开可读，但公司宣布其与独立Metavision SDK结束生命周期；Hearth公开迁移包、客户部署和收入待核 |
| SpiNNcloud | SpiNNaker2事件通信与混合计算系统 | Sandia确认2025年3月Braunfels到货并部署；莱比锡确认2025年10月系统运行。当前SDK公开，v0.8.2标签记录首次公开Docker镜像；EventProp仍为多层SNN片上训练研究验证 | 使用方已确认科研部署，不能再写成仅商业可用；合同、支付、收入、规模化训练与同任务整机能耗未知。药物筛选项目采用int8 DNN，不等同SNN训练 |
| 灵汐Lynxi | KA200系列，ANN与SNN融合 | KA200及SDK有合作方文档；BIDL 1.9说明GPU侧BPTT训练、灵汐侧推理，并宣称网络头部片上学习 | 头部在线学习有文档定位，尚缺独立实测及最新版本交付；2026客户、营收待核 |
| 达尔文体系 | Darwin系列、物源软件平台 | 2025年8月高校正式发布DarwinMonkey悟空；实验室官网列960颗Darwin3，并提供单芯片开发板、64芯片服务器及2025晶圆级平台 | 已发布研究系统与开发平台；规模和在线学习为机构口径，供货合同、付费用户与收入未知 |
| Intel | Loihi2、Lava、Hala Point | 官方核实Hala Point使用1152颗Loihi2并部署Sandia研究 | 研究平台；本轮未获得足够官方证据确认Loihi3量产 |
| 他山科技 | 触觉芯片、传感器、TS-ECHO数采与仿真 | E10A已公开发布／演示；NVIDIA文档收录TS-F-A仿真资产，官方仓库可读；奥比中光8月26日确认视触无本体数采合作；9月公众号转载称传感器月交付数万枚 | 从“官网产品定位”上调为“芯片发布＋可用仿真生态＋合作方确认数采”；传感器交付是公司／媒体口径，不等于E10A量产或审计收入。具名采购、芯片SNN范围、价格和验收待核；80%份额缺分母，不使用 |
| 脑智算芯 | 超大规模类脑智算，芯模算一体 | 2026年5月政务发布披露天使轮融资及大模型联合研发 | 创业与研发进展；不是已核实量产收入 |

事实来源：[BrainChip出货声明](https://investor.brainchip.com/press/brainchip-announces-commercial-availability-and-production-shipments-of-akd1500-neuromorphic-processors/)、[AKD1500 M.2公开可用](https://investor.brainchip.com/press/brainchip-akd1500-now-available-in-compact-m-2-form-factor-enabling-fanless-edge-ai-in-industrial-and-commercial-designs/)、[AKD1500 PCIe开发卡](https://investor.brainchip.com/press/brainchip-launches-akd1500-pcie-card-for-edge-ai-evaluation-everywhere/)、[Neuromorphyx在库BrainBoard1500](https://neuromorphyx.com/)、[BrainChip路线图](https://brainchip.com/brainchips-2026-technology-roadmap/)、[Pulsar产品](https://www.innatera.com/product/)、[Innatera部署](https://www.innatera.com/newsroom/neuromorphic-enters-the-mainstream-with-innateras-pulsar-chip-at-embedded-world-2026/)、[Joya客户模块](https://www.innatera.com/newsroom/joya-design-takes-neuromorphic-chip-from-design-to-device-with-first-innatera-powered-consumer-audio-product-at-awe-china/)、[MWC客户口径](https://www.innatera.com/newsroom/innatera-brings-physical-ai-to-life-at-mwc-shanghai-2026/)、[Synfire Beta包](https://pypi.org/project/synfire/)、[Akeana供应合作](https://www.innatera.com/newsroom/innatera-and-akeana-partner-on-energy-efficient-risc-v-for-edge-ai/)、[SynSense Speck](https://www.synsense.ai/products/speck-2/)、[Aeveon发布](https://www.synsense.ai/synsense-closes-strategic-round-to-accelerate-the-development-of-their-high-speed-3d-neuromorphic-processor-dynap-cnn2-2/)、[iniVation产品文档](https://docs.inivation.com/hardware/current-products.html)、[iniVation在线商店](https://shop.inivation.com/)、[时识融资同日媒体](https://finance.sina.com.cn/jjxw/2026-06-30/doc-inifcvua1690008.shtml?froms=ggmp)、[Prophesee Mantara与软件迁移公告](https://www.prophesee.ai/2026/06/15/prophesee-launches-mantara-event-based-drone-detection/)、[Prophesee当前资源访问说明](https://www.prophesee.ai/resources/)、[Prophesee伙伴相机](https://www.prophesee.ai/event-based-camera-partners/)、[OpenMV GenX320商品页](https://openmv.io/products/openmv-genx320-camera-module)、[IDS uEye XCP-E IMX636网店](https://en.ids-imaging.com/store/ueye-xcp-e.html)、[IDS uEye XLS-E生命周期](https://en.ids-imaging.com/store/ueye-xls-e.html)、[LUCID Triton2 EVS](https://thinklucid.com/triton2-evs-event-based-camera/)、[Terranet防务评估](https://terranet.se/en/press/terranet-signs-first-defence-evaluation-agreement/)、[SpiNNcloud](https://spinncloud.com/)、[Sandia部署](https://www.sandia.gov/research/news/brain-based-computing-for-nuclear-deterrence-solutions/)、[莱比锡使用方公告](https://www.uni-leipzig.de/newsdetail/artikel/vom-gehirn-inspiriert-supercomputer-staerkt-ki-forschung-an-der-universitaet-leipzig-2025-10-28)、[ScaDS.AI药物筛选路线](https://scads.ai/research/ai-algorithms-and-methods/methods-and-hardware-for-neuro-inspired-computing/projects/drug-discovery-on-the-spinnaker2-neuromorphic-supercomputer/)、[py-spinnaker2标签](https://gitlab.com/spinnaker2/py-spinnaker2/-/tags)、[灵汐合作方文档](https://docs.acoinfo.com/ai/overview/ai_chips/lynxi.html)、[达尔文官方平台](https://www.darwinware.com/zh)、[Intel Hala Point](https://www.intc.com/news-events/press-releases/detail/1691/intel-builds-worlds-largest-neuromorphic-system-to)、[他山](https://www.tashantec.com/)、[脑智算芯政务发布](https://www.thepaper.cn/newsDetail_forward_33199538)。

## 在线学习与科研平台：能力边界核查

检索日期：2026年10月2日，北京时间。本节以文档约束与研究实现范围比较，不用神经元规模、芯片功耗或融资额代替可部署学习能力。

| 平台与层级 | 学习范围及可获得证据 | 事件／发布日期 | 阶段及待核项 |
|---|---|---|---|
| BrainChip Akida／芯片与SDK | [MetaTF 2.19.3用户指南](https://doc.brainchipinc.com/user_guide/akida.html)限定Edge Learning为Akida v1末层FullyConnected，输入与权重均为1 bit；默认软件后端，硬件映射另行执行 | 动态文档发布日期未知；检索时版本2.19.3 | 文档事实；不能把末层自适应扩大成整网片上反向传播，也不能将软件跑通等同实机运行 |
| 灵汐BIDL／软件与部署平台 | [BIDL 1.9指南](https://bidl-zh.readthedocs.io/en/latest/overview.html)区分Nvidia GPU侧BPTT训练与灵汐推理，宣称头部支持片上学习；列HP／HS／SL／HM100兼容产品 | 发布日期未知，版权2024不能当发布日 | 厂商／平台文档宣称；头部更新算法、硬件实测和当前交付版本待核；没有证据支持整网训练上芯片 |
| 达尔文／研究系统 | [实验室发布页](https://www.darwinware.com/en/news/2025/publish)列悟空960颗Darwin3、开发板、64芯片服务器与晶圆级平台；Darwin3支持在线学习为机构宣称 | 实验室页面标2025-08-01；[浙大官方发布索引](https://www.zju.edu.cn/2025/0802/c76699a3072815/page.htm)标2025-08-02 | 修正原仅列旧平台的覆盖缺口；两处发布日期分别保留，不能合并为同一精确事件时间；规模发布不代表量产或收入 |
| SpiNNaker2／科研训练平台 | [EventProp论文v4](https://arxiv.org/html/2412.15021v4)在单芯片演示Yin Yang多层SNN训练，前向、反向及权重更新由片上PE执行；[2026芯片论文](https://arxiv.org/html/2607.24396v1)说明学习由可编程Arm核心实现 | EventProp初稿2024-12-19，v4 2025-03-19；芯片论文2026-07-27 | 作者研究结果；任务小、SRAM限制，不能视为边端持续学习量产方案。当前[SDK文档](https://spinnaker2.gitlab.io/py-spinnaker2/)与[标签页](https://gitlab.com/spinnaker2/py-spinnaker2/-/tags)已确认公开软件和Docker镜像，支持Brian2教程、NIR导入及双向实时脉冲；公开SDK不证明规模化训练瓶颈已解决 |
| Akida联邦学习／研究演示 | 两个物理AKD1000节点，四节点结果为虚拟实验；三类语音任务、CPU特征提取与片上末层学习；全文与代码均可读 | [预印本](https://arxiv.org/html/2603.13037v1)2026-03-13；实验具体日期未注明 | 作者报告，尚未独立复现；不是商业客户、世界模型或大规模联邦部署证据 |

**联邦研究的核查结果：**上述Akida预印本报告77.0%±3.8%为每次试验选择最优聚合策略的上界，不能写成固定FedUnion的部署精度；特征提取及宽特征投影在CPU上。报告的约1580次试验，与[代码仓库README](https://github.com/Stemo688/federated-neuromorphic-learning)当前约800次及部分策略描述存在差异，需对齐提交版本、结果文件后再复现。代码入口可见是事实，数值仍为作者报告；本轮没有实机复验或商业收入新证据。

**竞争判断（分析）：**科研市场已有大系统与多层训练平台，端侧产品则需要逐项核实更新范围。芯灵的差异应落实到相同任务下的传感输入、学习层、状态与权重容量、聚合方式、遗忘／漂移、整机能耗及付费部署；仅使用“在线学习”或“联邦”标签不足以建立优势。

## 机器人触觉与多模态证据

检索日期：2026年10月2日。芯片、传感器、仿真工具、数据采集合作和科研样机分别记录；产品编号P023–P024、研究编号R001–R002。资料不支持把全部触觉方案归为SNN，也不支持将多模态采集等同于已验证世界模型训练。

| 主体／交付层 | 本轮证据与日期 | 状态及边界 |
|---|---|---|
| 他山E10A／动态触觉芯片 P023 | WRC展商一手自述称ASC将触觉信号直接变为脉冲；新华网7月17日发布报道含现场演示 | 发布／演示；“动态触觉”不能自动证明整网SNN处理或在线学习。未见完整数据表、公开价格、采购入口或E10A量产客户 |
| 他山既有触觉传感器 P024 | IPO早知道9月23日全文转载称月交付数万枚、上半年订单超过2025全年四倍；WRC展商名单列智元、银河通用、因时等合作对象 | 公司／媒体出货与订单口径；未由具名采购方验证，未披露型号分拆、单价和收入。订单不等于回款；80%份额缺时间、分母和方法，不纳入份额统计 |
| TS-F-A／仿真工具 | NVIDIA文档9月18日更新，列TS-F-A Certified仿真资产；他山Isaac Sim与MuJoCo仓库全文可读 | 可用模型／资产事实，非芯片认证、实物出货或客户付款。仓库指向Isaac Sim 5.0.0及MuJoCo 3.2.3，内部传感回调含编译库；未独立运行或验证Sim2Real误差 |
| TS-ECHO／视触数据采集 | 奥比中光8月26日一手公告确认战略协议，拟将无本体数采硬件与TS-ECHO整合 | 合作方确认签约；具体签约日未知，8月26日是发布日期。没有公开验收、采购金额、数据规模或世界模型训练对照 |
| GelNeuro／科研 R001 | 中科院自动化所7月6日预印本：GelSight Mini前端直接接Speck2f，片上ROI及SCNN推理，无主机预处理；作者报15类纹理96.3%、80ms窗口、板级活动19.6mW | 作者实机研究结果，未独立复现；PC离线训练，不是片上在线学习；80ms是推理窗口，19.6mW不等于照明、机械臂及整机功耗。不采用CPU／GPU倍数作竞争排名，未发现公开完整复现包 |
| SpikingTac／科研 R002 | 中科院自动化所2月27日预印本：事件相机、持久动态状态图、U-Net去噪、迟滞增量补偿；作者报感知1000Hz、跟踪350Hz及实验过冲6.2mm | 研究样机，未独立复现；事件状态重建不自动等于专用SNN芯片。作者材料成本不是商品报价，无商业交付或收入证据 |

来源：[他山WRC展商与产品自述](https://www.worldrobotconference.com/expo/company/544.html)、[他山传感器宣传册，2页图像已核看](https://www.worldrobotconference.com/profile/robot/download/2026/07/22/20260722104953000698_20260722104953A267.pdf)、[E10A发布报道，7月17日](https://www3.xinhuanet.com/tech/20260717/d66a7bb7dcf8414baeab73d6499b785e/c.html)、[IPO早知道9月23日全文转载](https://app.myzaker.com/news/article.php?pk=6ab4cca98e9f093c4e2c94c8)、[NVIDIA当前资产文档](https://docs.isaacsim.omniverse.nvidia.com/latest/assets/usd_assets_tactile_sensors.html)、[他山Isaac Sim说明](https://github.com/TashanTec/Tashan-Isaac-Sim/blob/main/README.md)、[TactiSim／MuJoCo](https://github.com/TashanTec/TactiSim)、[奥比中光合作方公告](https://www.orbbec.com/news/orbbec-and-tashan-technology-form-strategic-partnership-to-advance-vision-tactile-data-collection-solutions/)、[GelNeuro全文](https://arxiv.org/html/2607.05241v1)、[SpikingTac全文](https://arxiv.org/html/2602.23654v1)。IPO早知道原公众号未直接读到，转载全文可读；他山technology页面本轮完整正文未取到，未用搜索摘要认定SNN微架构。

**竞争含义（分析）：**他山应从单一触觉前端对手扩展为传感器、仿真、跨本体数采与系统预算竞争者；奥比中光合作进一步压缩芯灵“多物理量数据闭环”的概念独占空间。GelNeuro让SynSense进入有实机研究支撑的触觉近传感计算比较，SpikingTac则说明事件状态处理可以由传感器与算法共同实现。芯灵的可编程时间状态、在线适应和动作闭环仍需与这些具体任务比较；已有证据不证明任何路线在完整机器人或世界模型训练上占优。

## 国内初创与类脑模型生态

原国内名单偏向芯片与感知硬件，遗漏了模型、机器人系统与软件架构公司。以下补充按主体与交付层分开：芯片研发、类脑模型、世界模型系统、科研平台。公司数量只是本报告可识别样本数，不能推出市场份额；模型融资与系统收入不计入芯片市场收入。检索日期均为2026年10月2日，北京时间。

| 主体与地域 | 路线与产品 | 证据和商业阶段 | 尚待核实 |
|---|---|---|---|
| 维泛智能，北京；2025年5月成立 | BiGPU，GPU与BPU双模同构；具身大小脑芯片、BrainOS、OmniRT | PAICORE 2.5测试芯片已回片并完成原型板首测，仍属工程验证。2026-08-24北京日报客户端报道团队在机器人赛事中使用自研OmniRT，6月与乐聚签署芯片适配等战略合作；证明工具存在和协同验证，不等于商业芯片量产或付费交付 | 2027年第二季度投产仍是计划；9月向首批战略伙伴开放OmniRT是否兑现、客户付费、产线与正式芯片规格未知 |
| 具脑磐石 EBKernel，上海；2025年创立 | Cog-WM 1.0认知世界模型；GLAM Nav、PAVE；按台／按年许可、软硬一体模组、行业方案与RaaS | 官网已明确四种商业交付形态，并列出NVIDIA Jetson、维泛OmniDimension及多家机器人本体伙伴；媒体转述公司称已在巡检／值守客户现场部署。官网里程碑披露2026年1月数千万元种子轮及5月亿元级天使轮 | 从“研究／原型”上调为“已定义商业产品形态／商务接洽”。未见公开价格、模组SKU／数据表、具名付费客户、验收、合同金额或收入；现场部署仍是公司／媒体宣称。节能幅度未实测，V2.0“数据需求约为VLA十分之一”是未来目标；未证明采用SNN芯片 |
| 最终序列，上海杨浦；2023年创业 | 飞行具身世界模型、端侧SNN基座、芯片模组与嵌入式BOX | 2026-05-28《杨浦时报》称年营收进入千万元；08-27南京市政府稿称已实现营收3000万元，属政府活动报道、未经审计。7月媒体披露模组千元级、BOX万元级及面向大客户／Tier 1模式 | 从“收入未知”上调为“有收入公开口径”。仍无客户具名采购或审计分拆；与大疆、道通为洽谈。芯片模组不等于自研ASIC，型号、供应商与SNN执行占比待核 |
| 寰宇心生 WorldMind，上海；2026年9月3日注册 | 神经认知世界模型、多模态数据体系与训练基础设施 | 2026-09-07披露元生资本数千万元早期融资；不同媒体称种子或天使，按同一轮合并。科创板日报称WorldArena 2.0 Track 1前三、Track 2第二；榜单主体映射仍需独立复核 | 真实场景工程仍待推进；未发现芯片产品或收入披露。不能把世界模型评测成绩直接等同商业化 |
| 羲悉智能 Xisiid，上海杨浦；2025年9月成立 | 类脑预测模型、System 1执行与System 2层级记忆；自进化智能体基座 | 官网全文可读：1B与8B模型完成阶段验证；2026-09公开基座并披露数千万元种子轮。主体映射为上海羲悉智能科技有限公司；蔡炎松为创始人／董事长，李丹为CEO／法定代表人 | 30B模型对标万亿参数模型、机构客户验证及算力节约均为公司宣称；客户未具名、付款与评测原始数据未知。属模型／系统公司，无自研芯片证据 |
| 中科类脑，安徽相关线索 | 异构计算系统、面向电力的多模态大模型、算电碳协同系统 | 官网搜索索引显示业务覆盖算力与电力系统；纳入系统层补查池 | 本轮仍未取得足够完整的一手产品与客户证据；不能因公司名断定采用SNN |

**全球世界模型并购对照：**World Labs于2026年7月21日收购机器人仿真公司SceniX，7月28日展示real-to-sim-to-real训练与评估链，9月1日发布Atlas并向少数伙伴早期开放。AMD于9月26日签署、9月28日宣布约82亿美元全股票收购协议，预计2026年底完成，仍待监管批准和惯例条件。World Labs属于模型／系统层，不计为类脑芯片供应商；未发现其采用事件数据、SNN或专用类脑芯片的证据。来源：[AMD公告](https://ir.amd.com/news-events/press-releases/detail/1299/amd-to-acquire-world-labs-to-advance-the-future-of-ai-compute)、[SEC 8-K](https://www.sec.gov/Archives/edgar/data/2488/000000248826000182/amd-20260926.htm)、[SceniX／R2S2R](https://www.worldlabs.ai/blog/real-to-sim-to-real)、[Atlas](https://www.worldlabs.ai/blog/atlas)。

### 国内补充来源与公众号溯源

维泛：[北京大学2026-05-15项目介绍](https://sie.pku.edu.cn/xwgg/xwdt/d5026a1ddd8949f4949404009fdb1002.htm)、[钛媒体全文转载，2026-08-24](https://view.inews.qq.com/a/20260824A0AGE400)、[北京日报客户端报道赛事使用OmniRT，2026-08-24](https://news.bjd.com.cn/2026/08/24/90070084.shtml)、[中国机器人产业发展联盟：与乐聚6月18日合作，2026-09](https://www.cdra.hk/news/10604)。赛事使用与战略合作只证明工程工具和适配活动；未取得9月对外开放记录、商业许可证、采购合同或收入。

具脑磐石：[Cog-WM 1.0官方技术报告，2026-09](https://www.ebkernel.com/research/cog-wm-1.0/)、[GLAM导航预印本，2026-09-13](https://arxiv.org/abs/2609.14561)、[PAVE操作预印本，2026-08-31，09-18更新](https://arxiv.org/abs/2608.30378)、[IPO早知道公众号全文转载，2026-05-25](https://finance.sina.com.cn/wm/2026-05-25/doc-inhzascq3648289.shtml)。论文证明研究结果与定性真机演示，不证明客户交付。官网明确代码、模型权重尚未开放，节能幅度尚未实测。

最终序列：[新华网全文专访，2026-05-06](https://app.xinhuanet.com/news/article.html?articleId=20260506d2fe24b1dd1e41b88b700f98092a6cfa)、[《杨浦时报》，2026-05-28](https://yptimes.shyp.gov.cn/html/2026-05/28/content_9400_19571831.htm)、[南京市政府活动报道，2026-08-27](https://www.nanjing.gov.cn/njxx/202608/t20260827_5900119.html)、[WAIC产品与价格报道，2026-07-20](https://finance.sina.com.cn/stock/relnews/cn/2026-07-20/doc-iniimzfz2995620.shtml)。营收3000万元为政府活动稿中的公开口径，未见审计报表；千元级模组、万元级BOX和98%成功率为媒体及公司人员说法。大疆、道通仅处洽谈，不能写成客户。

WorldMind：[新京报引点石资本公众号，2026-09-07](https://m.bjnews.com.cn/detail/1788760991129637.html)、[科创板日报融资与WorldArena口径，2026-09-08](https://www.chinastarmarket.cn/detail/2476378)、[36氪创始人访谈，2026-09-08](https://www.36kr.com/p/3973553316081920)。2026-09-03注册；“种子／天使”暂按同一笔数千万元早期融资合并，不累计为两轮。WorldArena名次来自报道，公开榜单尚未完成参赛主体映射复核。

羲悉：[公司官网](https://xisiid.com/)、[架构说明：1B与8B阶段验证](https://xisiid.com/blog-static/articles/%E4%BB%8E%E8%AF%AD%E8%A8%80%E7%94%9F%E6%88%90%E5%88%B0%E7%8A%B6%E6%80%81%E9%A2%84%E6%B5%8B%20-%20%E7%BE%B2%E6%82%89%E7%89%88%E5%BC%8F.html)、[投资界全文转载：种子轮与系统披露，2026-09-14](https://i.ifeng.com/c/8wPUA6WbRyD)、[官方发布稿转载，2026-09-15](https://www.sohu.com/a/1076294104_122639283)。工商与报道交叉映射为上海羲悉智能科技有限公司；蔡炎松为创始人／董事长，李丹为CEO／法定代表人。官网技术内容和客户测试均属公司披露，尚无具名客户付款或独立评测。待核：[中科类脑官网](https://www.leinao.ai/about)。

### 科研项目与市场统计边界

[中科院自动化所瞬悉1.0公告，2025-09-08](https://www.ia.ac.cn/xwzx/ttxw/202509/t20250908_7963509.html)、[BrainCog智脉官网](https://www.brain-cog.network/cn)进入模型与科研生态观察池；项目不是独立初创公司，也不是2026年新成立企业。“脑启”、BriLLM、瞬悉等品牌和论文需逐项建立研发机构、商业主体、芯片供应方映射，不能直接按名称累计创业公司。

**竞争含义（分析）：**国内竞争已扩展到模型授权、端侧部署、机器人系统及行业交付；World Labs先并入SceniX的real-to-sim-to-real机器人仿真链，再与AMD签署拟收购协议，说明空间世界模型正与主流CPU／GPU平台、仿真和闭环训练结合。芯灵需要同时识别芯片替代者、应用预算竞争者与可合作的模型方，并证明事件数据相对合成仿真世界在训练、评估或部署中的增量价值。世界模型本身不证明事件数据输入、SNN执行或低功耗硬件优势；本轮仍未得到World Labs或国内世界模型训练实际采用事件数据的可复现证据。

## 小公司与相邻替代路线

这些公司应进入竞争雷达，但不能全部归为脉冲类脑芯片。

| 主体 | 当前产品或定位 | 已核实状态 | 竞争关系分析 |
|---|---|---|---|
| POLYN | NASP固定模拟网络前端；VAD、VibroSense TMS工程芯片 | 官网说明已有两款工程芯片；2026年9月28日称开始交付VibroSense TMS工程传感节点供潜在客户评估；固定模拟结构不能片上重训 | 常开传感、车载胎内处理与数据压缩替代；客户评估强于流片，但仍不是量产、订单或收入 |
| Blumind | BM110音频／时序、BM210视觉；AMPL全模拟IP、chiplet及KGD | 官网列出产品名、PyTorch／TensorFlow权重映射流程并称AMPL硅验证；全部采用联系式获取，本轮未见数据表、价格、库存、具名客户或收入 | 常开音频、时序与视觉触发竞争；按硅验证／商务接洽记录，不能从获奖或“产品”字样推断量产 |
| Aspinity | AML100模拟AI前端；AML200射频模拟AI | 官网明确区分：AML100为生产IC、正在出货且配套Python SDK；AML200仍为“开发中、测试芯片已验证” | AML100是可部署的模拟前端替代；AML200不能按量产RF芯片记录，性能数字均为厂商测试口径 |
| Mythic | M1模拟存算APU；Vanguard混合模拟／数字路线；Videantis数字处理IP | M1官网提供“立即评估”入口；2026年2月本田投资并宣布联合开发车载SoC；5月19日完成收购Videantis | 车载、机器人、视觉与边缘AI的重要模拟CIM竞争者。Videantis逾2500万颗芯片的既有装机是其数字IP成绩，不能追溯为Mythic模拟APU出货 |
| 九天睿芯REEXEN | 既有SRAM存算边缘芯片；HBF SSD、ADA300／400及服务器路线 | 2025年投资界转述公司称既有芯片在多家客户量产并获未具名国际品牌订单，第二代轻量大模型芯片已流片；当前官网新增HBF、ADA300／400和服务器，但未披露这些新系统的上市日、数据表、价格、评估或客户 | 既有边缘产品与新大模型路线必须分账：前者是公司／媒体量产口径，后者仍按官网路线与方案记录；均缺具名采购和审计收入 |
| Rain AI | 数字存内计算tile及软件IP；后续自有芯片 | 产品页明确IP可用于定制SoC，硬件“即将可用”；本轮未见公开芯片型号、开发板、价格、库存或客户 | 当前是数字CIM IP替代，不按历史“模拟／类脑”标签归类；片上微调仍是研发叙事而非已交付产品功能 |
| MemryX | MX3近存数据流NPU与Cascade模块；MX3+／MX4后续路线 | MX3官网标为可批量下单；2026年8月31日MemryX与Express LUCK联合稿称系统已部署在日常生产线；同年6月扩展Cascade产品族 | 已从“在产但客户未知”上调为具名工厂部署与公开批量订购入口；部署规模、采购数量、合同金额和收入仍未披露 |
| Synthara | ComputeRAM数字存内计算SRAM IP宏 | 官方资料称为“硅验证”的可授权IP宏并配套SDK路线；本轮未见封装芯片、公开SDK下载、价格、库存、具名design win或收入 | 可嵌入成熟MCU／SoC，直接竞争独立协处理器；厂商基准不能跨平台做功耗排名 |
| AnalogAI | 基于SST memBrain SAGE的模拟CIM边缘处理器 | 2026年9月15日Microchip称AnalogAI为首代处理器选用其硅验证IP；未见芯片型号、流片、样片、开发板、客户或收入 | 新增长尾，处于IP／供应链选型阶段；“同时训练与推理、低于1W”是目标与厂商宣称，不是量产证据 |
| semiQa | ANN1000边缘、ANN2000数据中心模拟神经网络IP | 官网称两款IP可授权并提供PDK／SDK支持；2026年9月24日第三方披露种子轮。本轮未见流片、封装芯片、开发板、具名客户或收入 | 早期IP长尾；官网“面向量产”是定位，不等于已量产或客户采用 |
| 爱芯元智Axera | AX8850系列传统NPU SoC、算力卡与本地视频智能体 | 2026年8月10日官网半年报摘要披露上半年边缘AI业务收入2769万元；6月列VideoAgent及开放SDK，GitHub可读视频流水线 | 同时是第三方端侧算力候选与系统预算竞争者；收入不是类脑芯片收入，客户与系统功耗需另核 |
| Syntiant | NDP115／120／200／250深度神经网络处理器；Knowles消费MEMS麦克风业务 | 当前产品表将115／120／200标为Mass Production，250仍Sampling；2024年12月30日以1.5亿美元现金加股票完成收购Knowles消费MEMS麦克风业务，该业务2023年收入约2.56亿美元 | 从处理器向传感器、模型和软件垂直整合；2.56亿美元是被收购麦克风业务历史收入，不是Syntiant NDP芯片收入；不同型号阶段不混用，无证据将其归为SNN |
| STMicroelectronics | STM32N657X0 MCU；STM32N6570-DK等开发硬件 | STM32N657X0具体SKU标为Active，官方资料将其列为量产路线；N6570-DK可从ST直购，本轮页面未显示分销库存。Neural-ART工具支持算子映射，未支持算子回退CPU | 通用MCU、接口、生态和板卡可得性构成直接替代；600 GOPS是厂商口径，不与不同模型或精度横排 |
| NXP | i.MX RT700跨界MCU；MIMXRT700-EVK | 官方EVK页标为Active；2026年10月2日显示187.23美元、2套库存、1至2个工作日发货。芯片集成双M33、HiFi4／HiFi1 DSP与Neutron NPU，公开资料聚焦编译和推理 | 多核MCU、DSP、NPU与现货评估板降低采用门槛；未核到片上在线权重更新、终端批量或该产品收入 |
| Synaptics | Astra SL2610 SoC；Astra Machina开发套件 | 当前官网列Mouser、DigiKey、Codico购买入口，并提供2026用户指南、数据表和应用资料；Torq使用Coral Open NPU及IREE／MLIR。2025公告的2026年二季度GA计划不能单独当作已完成量产 | 端侧多模态和生成式AI工具链与芯灵系统预算重叠；分销入口证明可评估，不证明SoC出货数量、终端定点或收入 |
| Hailo | Hailo-10H M.2生成式AI加速器 | 公司2025年7月22日宣布商业可用、全球客户可下单；当前产品与商店页面继续列M.2模块。40／20 TOPS及典型2.5W均为厂商口径，汽车SOP目标为2026 | 已有明确订单入口，直接竞争边缘VLM／LLM预算；不由公告推断销量、汽车量产、客户design win或收入 |
| Ambiq | Apollo510 Cortex-M55 MCU、评估板；Apollo510 Lite芯片 | DigiKey在2026年10月2日显示Apollo510 EVB有12套库存；Apollo510 Lite SKU为Active但库存0，约4900颗预计10月5日到货。官方资料明确Apollo510不含独立NPU，NeuralSPOT／HELIA用于推理 | 常开语音与传感可由高效MCU替代；评估板可买强于仅发布，但Lite芯片未按现货或已量产收入记录，未见片上在线权重更新 |
| Neurxcore | 神经处理器IP及软件 | 官方产品公告基于NVIDIA DLA | 放入传统NPU替代池，不能与SENeCA混淆 |

来源：[POLYN客户评估公告](https://polyn.ai/polyn-delivers-first-vibrosense-tms-engineering-sensor-nodes-for-customer-evaluation/)、[Blumind产品页](https://blumind.ai/products/)、[Aspinity AML100／AML200](https://www.aspinity.com/products.html)、[本田与Mythic联合开发](https://global.honda/en/topics/2026/c_2026-02-04eng.html)、[Mythic M1](https://www.mythic.ai/m-1)、[Mythic收购Videantis](https://www.mythic.ai/newsroom/Blog%20Post%20Title%20One-3zaa9-zlxng-67tfc-lbgbx)、[REEXEN当前产品体系](https://www.reexen.com/)、[投资界2025年B轮全文](https://news.pedaily.cn/202509/555264.shtml)、[Rain产品](https://rain.ai/products)、[MemryX MX3](https://memryx.ai/mx3/)、[Express LUCK部署公告](https://memryx.ai/news/express-luck-selects-memryx-for-ai-enabled-smart-manufacturing-operations/)、[Synthara ComputeRAM资料](https://synthara.ai/wp-content/uploads/2025/03/EW-version-Leaflet-Trifolds.pdf)、[Microchip／AnalogAI](https://ir.microchip.com/news-events/press-releases/detail/1414/analogai-selects-membrain-sage-intellectual-property-from-silicon-storage-technology-for-its-first-real-world-edge-ai-processors)、[semiQa技术与产品](https://semiqa.com/en/technology)、[semiQa融资报道](https://dealroom.co/news/156001-polands-semiqa-raises-seed-round-to-build-energy-efficient-ai-chips/)、[Neurxcore产品公告](https://neurxcore.com/portfolio/neurxcore-introduces-innovative-npu-product-line-for-ai-inference-applications-powered-by-nvidia-deep-learning-accelerator-technology/、[ST STM32N6570-DK](https://www.st.com/en/evaluation-tools/stm32n6570-dk.html)、[ST STM32N657X0](https://www.st.com/en/microcontrollers-microprocessors/stm32n657x0.html)、[NXP MIMXRT700-EVK](https://www.nxp.com/design/design-center/development-boards-and-designs/i-mx-evaluation-and-development-boards/mimxrt700-evk-evaluation-kit-for-i-mx-rt700-family:MIMXRT700-EVK)、[Synaptics Astra Machina SL-Series](https://www.synaptics.com/products/embedded-processors/astra-machina-sl-series)、[Hailo-10H商业可用公告](https://hailo.ai/company-overview/news/hailo-10h-ai-accelerator-launch/)、[Ambiq Apollo510](https://ambiq.com/apollo510/)、[DigiKey Apollo510 EVB](https://www.digikey.com/en/products/detail/ambiq-micro-inc/EVB-APOLLO510/))。

### 传统端侧替代证据补充

检索日期：2026年10月2日，北京时间。爱芯元智[2026-08-10半年报摘要](https://www.axera-tech.com/zh-hans/news/3270.html)转述2026上半年边缘AI收入2769万元；本轮未取得港交所完整半年报逐项复核，按发行人官网摘要记录，不将公司全部收入归入边缘业务或类脑市场。[2026-06-23生态总结](https://www.axera-tech.com/zh-hans/news/3224.html)列本地VideoAgent、AX8850社区SDK与Pulsar2 6.0；[ax-pipeline官方仓库](https://github.com/AXERA-TECH/ax-pipeline)可读解码、检测、跟踪、编码流水线，[ax-llm](https://github.com/AXERA-TECH/ax-llm)列适配芯片。代码公开是开发与部署证据，不证明客户验收、在线SNN学习或事件数据世界模型训练。

MemryX[官网路线图](https://memryx.ai/)明确MX3在产、MX3+设计中、MX4规划中；[MX3+](https://memryx.ai/mx3-plus/)与[MX4](https://memryx.ai/mx4/)的算力、模型容量倍数是厂商目标，未作实测排名。动态产品页未给发布日期与具体发布事件日，本轮仅记录检索快照。[SDK发行说明](https://developer.memryx.com/release_notes.html)标明2.2于2026-04-01发布、文档2026-07-15更新，Frigate稳定版0.17需继续使用SDK2.1。MX3官网功耗范围200mW至3W与此前数据手册0.5至3W口径不同，模式与测试条件待核，不能据此宣称硬件功耗近期降低。

Syntiant[当前产品阶段表](https://www.syntiant.com/platform/chips-and-hardware/)区别NDP115/120/200量产与NDP250送样；动态表发布日期未知。合作方[Arduino Nicla Voice产品页](https://store.arduino.cc/products/nicla-voice)确认NDP120、音频与运动传感器集成及销售入口，构成平台生态交叉证据；不证明具体终端销售规模。

**对芯灵的竞争含义（分析）：**成熟端侧替代不再只是“传统NPU”概念：STM32N6、RT700开发板、SL2610套件、Hailo-10H与Apollo510 EVB已有不同程度的直购、分销或订单入口。公开工具链仍以模型编译与推理为主，未核到片上在线权重更新。对芯灵而言，通用接口、熟悉的RTOS／编译器、现货开发板和模块供应，可能比单点功耗更先影响采购；差异仍需在相同传感器、任务、精度、时延与整机功耗下验证。本轮没有新证据证明“脉冲化数据必然改善世界模型训练”。

| 主体 | 本轮核实结果 | 分类与阶段 | 仍需核实 |
|---|---|---|---|
| GrAI Matter Labs | 法国工商文件确认其于2024年2月1日被Snap Group SAS吸收合并，原公司解散并注销；Snap Group 2024年报确认转入资产6331万欧元、负债864万欧元 | 已退出独立经营，不再计为独立活跃供应商；转入金额是集团内吸收合并会计数，不是收购价格 | GrAI VIP是否继续对外销售、技术是否进入Spectacles及对应收入未知 |
| iniVation → SynSense Group | 2024年2月1日公告确认100%股份收购；苏黎世实体继续运营并服务客户 | 已完成所有权整合，iniVation不再作为独立所有权供应商计数；品牌与产品延续 | 交易金额、收入拆分和整合后的客户规模未知 |
| Knowles消费MEMS麦克风业务 → Syntiant | 2024年12月30日完成，1.5亿美元现金加股票；被收购业务2023年收入约2.56亿美元 | 传感器、处理器、模型和软件垂直整合 | 被收购业务历史收入不能计为NDP芯片收入；收购后收入拆分未知 |
| SceniX → World Labs → AMD | World Labs于2026年7月21日收购SceniX；AMD于9月26日签署、9月28日宣布约82亿美元全股票收购World Labs协议 | SceniX已并入；AMD交易预计2026年底完成，仍待监管批准和惯例条件，不写成已完成 | World Labs／SceniX客户、收入、AMD交割结果及事件数据／SNN采用证据未知 |
| Aspirare Semi | 官网称提供采用模拟计算核心的边缘AI芯片，并给出相对传统方案的性能与能耗宣称 | 模拟AI芯片创业公司线索；未找到型号数据手册、流片、评估板、代工或客户证据 | 真实ASIC、制程、实测条件、交付阶段及融资 |
| Vivum AI | 官网定位Evolutionary AI与边缘自主系统；投资方页面提到模型及协处理器 | 模型／系统公司，尚不能确认自研ASIC供应商 | 协处理器形态、芯片型号、流片与客户部署 |
| Grayscale AI | 官网聚焦GPS拒止环境导航、定位、跟踪及事件感知；NATO DIANA与公开资料支持防务机器人方向 | 事件感知与自主系统公司；未发现自研芯片证据 | 使用的事件传感器／计算平台、客户和合同 |
| Neurobus | 官网定位国防、航天的类脑AI与嵌入式硬件；公开项目强调检测与自主导航 | 系统集成与嵌入式方案线索；未证实自研ASIC | 处理器来源、硬件型号、部署、认证和收入 |
| 同为智脑PSP、CelePixel及其他忆阻器／液态网络项目 | 仅有官网、项目或名单线索 | 继续放待核池，不因“类脑”名称计作独立芯片厂商 | 法律主体、产品型号、硅证据、客户与收入 |

证据来源：[GrAI吸收合并工商记录](https://www.pappers.fr/entreprise/snap-group-sas-820920056)、[Snap Group 2024年报](https://www.pappers.fr/entreprise/snap-group-sas-820920056/comptes/SNAP%20GROUP%20SAS%20-%20Comptes%20sociaux%202024%2002-07-2025.pdf)、[Aspirare官网](https://www.aspirare.io/)、[Vivum官网](https://vivum.ai/)、[Grayscale AI官网](https://grayscale.ai/)、[Neurobus官网](https://neurobus.ai/)、[同为智脑官网](https://al-brain.com/)。

传统替代池本轮已把Hailo、Ambiq、Synaptics、ST与NXP纳入矩阵；后续补查爱芯元智、瑞芯微、Renesas及Sony事件传感器生态，并继续核实这五家的终端design win、实际出货和收入。本版不对未核公司的最新规格或份额作结论。

## 关键行业动态时间线（2025商业基线与2026更新）

| 事件日期 | 动态 | 证据及含义 |
|---|---|---|
| 2025年7月22日 | Hailo宣布Hailo-10H商业可用并接受全球订单 | [Hailo官网](https://hailo.ai/company-overview/news/hailo-10h-ai-accelerator-launch/)；建立可下单M.2与软件路径，不证明终端设计定点、销量或收入 |
| 2月3日 | BrainChip宣布Pico可通过FPGA Cloud评估 | [公司公告](https://brainchip.com/press/brainchip-announces-immediate-availability-of-akida-pico-for-remote-evaluation-via-fpga-cloud/)；减少评估门槛，不代表实体芯片量产 |
| 2月4日 | 本田投资Mythic并宣布联合开发车载SoC | [本田官网](https://global.honda/en/topics/2026/c_2026-02-04eng.html)；证明战略投入和联合研发，不等于当前车型定点或量产 |
| 2月5日 | Terranet签署首个防务评估协议 | [公司公告](https://terranet.se/en/press/terranet-signs-first-defence-evaluation-agreement/)；BlincVision使用Prophesee事件相机，协议与2026年MVP外部评估计划不等于量产订单或收入 |
| 3月5日公告 | Innatera介绍Embedded World伙伴演示 | [公告](https://www.innatera.com/newsroom/neuromorphic-enters-the-mainstream-with-innateras-pulsar-chip-at-embedded-world-2026/)；场景包括烟雾、维护和雷达 |
| 3月12日事件，3月26日页面时间 | Joya发布Pulsar驱动的EdgeCore音频模块 | [Innatera公告](https://www.innatera.com/newsroom/joya-design-takes-neuromorphic-chip-from-design-to-device-with-first-innatera-powered-consumer-audio-product-at-awe-china/)称模块可供OEM集成并在AWE展示；是客户模块，不等同终端产品批量出货 |
| 3月25日事件，3月26日网页；6月29日软件发布 | Innatera宣布并实际发布Synfire工具链 | [公告](https://www.innatera.com/newsroom/innatera-launches-synfire-to-unify-the-neuromorphic-ecosystem-and-accelerate-real-world-edge-ai-deployment/)原计划4月底全面可用；[PyPI 0.0.2](https://pypi.org/project/synfire/)为Beta、专有许可SDK／CLI并带Innatera GitHub发布证明，确认工具可安装，不证明活跃模型库或多硬件互操作已实现 |
| 5月19日 | Mythic完成收购Videantis | [Mythic公告](https://www.mythic.ai/newsroom/Blog%20Post%20Title%20One-3zaa9-zlxng-67tfc-lbgbx)；补齐数字处理IP与量产软件经验。Videantis既有逾2500万颗芯片装机不能计作Mythic模拟APU出货 |
| 5月19日 | BrainChip授予ASICLAND非独家Akida IP分销许可 | [BrainChip公告](https://brainchip.com/press/brainchip-and-asicland-partner-to-expand-neuromorphic-computing-access-across-global-asic-markets/)；允许评估与MPW，但每个生产客户仍需BrainChip批准并另付费，不代表量产客户或已确认收入 |
| 5月19日发布 | 脑智算芯天使融资公开 | [政务资料](https://www.thepaper.cn/newsDetail_forward_33199538)；大模型与类脑计算形成新交集 |
| 6月15日 | Prophesee宣布Mantara、Hearth及2000万欧元融资 | [公告](https://www.prophesee.ai/2026/06/15/prophesee-launches-mantara-event-based-drone-detection/)；向系统与平台扩展，宣布OpenEB及独立SDK结束生命周期并支持迁移。检索时OpenEB仍公开可读，[资源页](https://www.prophesee.ai/resources/)说明新学术用户对Metavision SDK 4.6的访问已于8月31日结束；Hearth公开迁移包未找到 |
| 6月18日发布，24日官网文章 | SynSense Aeveon视觉路线 | [官网](https://www.synsense.ai/synsense-closes-strategic-round-to-accelerate-the-development-of-their-high-speed-3d-neuromorphic-processor-dynap-cnn2-2/)与[9月27日报道](https://news.cnnb.com.cn/system/2026/09/27/030819400.shtml)日期区分；厂商声称原生1000fps与多模式时空输出；官网仅给销售联系入口，本轮未见公开数据表、开发板、价格或库存 |
| 6月22日 | MemryX扩展Cascade模块产品族 | [公司公告](https://memryx.ai/news/memryx-expands-cascade-ai-accelerator-family-for-flexible-edge-and-embedded-deployment/)；同一MX3和工具链覆盖M.2、PCIe、Raspberry Pi与USB，扩大可部署形态 |
| 6月23日 | BrainChip通信参考平台 | [公告](https://brainchip.com/press/brainchip-unveils-communication-reference-platform-fueling-signal-intelligence-at-the-edge/)；向RF信号智能拓展 |
| 6月30日，8月26日财报确认 | BrainChip AKD1500首批生产批次 | [监管半年报](https://investor.brainchip.com/wp-content/uploads/2026/09/2026-08-26-June-2026-half-yearly-report.pdf)确认首批2000颗已收货并进入商业规模制造，最终产量因良率低于预期预计略低于计划；2000颗不是已核客户出货，客户仍未具名 |
| 6月完成，7月14日参投方发布 | SynSense数亿元B轮及批量订单口径 | [参投方华仓资本](https://mp.weixin.qq.com/s/HLJ6C3ItPRv6SeJbwSJeEQ)确认国调二期领投及华仓、国海、宏力达等参与，并称视觉产品获批量订单、近两年年均复合增长率超160%；未披露型号、客户、数量、金额、交付、绝对收入或审计基数 |
| 7月7日 | POLYN与ALTER France建立芯片验证实验室 | [公告](https://polyn.ai/polyn-technology-and-alter-technology-france-establish-a-joint-chip-validation-lab/)；验证与测试生态建设 |
| 7月17日发布 | 他山E10A动态触觉芯片亮相 | [发布报道](https://www3.xinhuanet.com/tech/20260717/d66a7bb7dcf8414baeab73d6499b785e/c.html)及[展商自述](https://www.worldrobotconference.com/expo/company/544.html)；发布／演示，不等于量产 |
| 7月21日收购，7月28日发布R2S2R | World Labs收购机器人仿真公司SceniX | [World Labs](https://www.worldlabs.ai/blog/real-to-sim-to-real)称其链路把真实任务转为可控仿真，用于策略训练、评估和回到真实机器人；结果为公司展示，未独立复现，未披露交易金额或客户收入 |
| 7月28日 | BrainChip AKD1500 M.2模块公开可用 | [公告](https://investor.brainchip.com/press/brainchip-akd1500-now-available-in-compact-m-2-form-factor-enabling-fanless-edge-ai-in-industrial-and-commercial-designs/)称可从其网店购买；证明模块采购入口，不证明终端销量 |
| 8月13日 | BrainChip与Orama.AOI公布工业检测参考部署 | [BrainChip公告](https://brainchip.com/press/orama-ai-partners-with-brainchip-to-bring-production-ready-neuromorphic-vision-to-industrial-inspection/)称伙伴用轮胎生产与半导体封装数据重训Akida；“production-ready”和“reference deployment”为伙伴／公司宣称，未披露终端工厂、订单、数量或收入 |
| 8月18日宣布；10月2日检索 | Neuromorphyx BrainBoard1500第三方开发板 | [BrainChip公告](https://investor.brainchip.com/press/brainchip-and-neuromorphyx-announce-an-akd1500-embedded-developer-board-bringing-neuromorphic-ai-to-the-embedded-engineering-community/)与[Neuromorphyx商店](https://neuromorphyx.com/)交叉；后者显示现货、立即发货。仍是开发／评估板，不是终端设计定点 |
| 8月26日发布，具体签约日未知 | 奥比中光与他山确认视触无本体数采合作 | [合作方一手公告](https://www.orbbec.com/news/orbbec-and-tashan-technology-form-strategic-partnership-to-advance-vision-tactile-data-collection-solutions/)；拟整合数采硬件与TS-ECHO，非验收、付费或世界模型训练实证 |
| 8月26日发布 | BrainChip 2026半年财报 | [官方财报](https://investor.brainchip.com/wp-content/uploads/2026/09/2026-08-26-June-2026-half-yearly-report.pdf)；可用实际收入校验商业化叙事 |
| 8月31日 | Express LUCK宣布生产线部署MemryX边缘AI系统 | [联合稿](https://memryx.ai/news/express-luck-selects-memryx-for-ai-enabled-smart-manufacturing-operations/)含制造商副总裁引述；证明具名日常生产部署，不披露数量、金额或收入 |
| 9月14日发布 | 具脑磐石发布Cog-WM 1.0并公开四种交付形态 | [EBKernel官网](https://www.ebkernel.com/)明确按台／按年许可、软硬一体模组、行业方案和RaaS；[雷峰网](https://www.leiphone.com/category/robot/5MGUk6oaVVe8VIn1.html)转述客户现场部署。未披露具名付费客户、合同、验收或收入，节能幅度未实测 |
| 9月15日 | AnalogAI为首代处理器选择SST memBrain SAGE IP | [Microchip公告](https://ir.microchip.com/news-events/press-releases/detail/1414/analogai-selects-membrain-sage-intellectual-property-from-silicon-storage-technology-for-its-first-real-world-edge-ai-processors)；供应链／IP选型，不等于芯片已流片 |
| 9月17日 | BrainChip AKD1500 PCIe开发卡公开销售 | [公告](https://investor.brainchip.com/press/brainchip-launches-akd1500-pcie-card-for-edge-ai-evaluation-everywhere/)称可从网店购买；用途明确为硅片评估，不把开发卡销量当终端部署 |
| 9月1日 | World Labs发布Atlas空间智能模型并向少数伙伴早期开放 | [World Labs](https://www.worldlabs.ai/blog/atlas)称Atlas用多模态自回归扩散Transformer处理文本、图像、视频与3D；属于模型／系统层早期访问，不是类脑芯片量产 |
| 9月24日 | semiQa种子轮由第三方披露 | [Dealroom报道](https://dealroom.co/news/156001-polands-semiqa-raises-seed-round-to-build-energy-efficient-ai-chips/)；官网列ANN1000／2000可授权IP，但未核到流片或客户 |
| 9月26日签署，9月28日宣布 | AMD拟以约82亿美元全股票收购World Labs | [AMD公告](https://ir.amd.com/news-events/press-releases/detail/1299/amd-to-acquire-world-labs-to-advance-the-future-of-ai-compute)与[SEC 8-K](https://www.sec.gov/Archives/edgar/data/2488/000000248826000182/amd-20260926.htm)交叉；预计2026年底完成，仍待监管批准和惯例条件，不写成已完成，也不证明World Labs采用事件数据、SNN或专用类脑芯片 |
| 9月23日（标签关联提交） | py-spinnaker2 v0.8.2标注首次公开Docker镜像 | [GitLab标签](https://gitlab.com/spinnaker2/py-spinnaker2/-/tags)、[当前文档](https://spinnaker2.gitlab.io/py-spinnaker2/)和[Docker Hub](https://hub.docker.com/r/spinnaker2/py-spinnaker2/tags)交叉确认镜像公开；首个实际推送日未核，SDK公开不等于规模化训练已解决 |
| 9月28日 | POLYN宣布首批VibroSense TMS工程传感节点可供潜在客户评估 | [公司公告](https://polyn.ai/polyn-delivers-first-vibrosense-tms-engineering-sensor-nodes-for-customer-evaluation/)；从流片／验证推进到客户评估，但未披露具名客户、订单、生产资格、数量或收入 |

### 商业化证据锚点

BrainChip截至2026年6月30日半年收入1222745美元，同比增长19%；许可613826美元、产品110362美元、开发服务498557美元，净亏损12015897美元。监管半年报另披露：首批2000颗AKD1500已收货，最终产量因良率低于预期预计略低于计划；客户收款813247美元、经营现金净流出11253495美元、期末现金及现金等价物20304971美元。贡献超过10%收入的客户合计983780美元，约占半年收入80.5%；客户未具名。收入、收款、现金、生产批次和客户出货不是同一指标。[官方财报](https://investor.brainchip.com/wp-content/uploads/2026/09/2026-08-26-June-2026-half-yearly-report.pdf)。

具脑磐石已公开模型按台／按年许可、软硬一体模组、行业方案与RaaS四种交付形态；官网列出NVIDIA Jetson、维泛OmniDimension及机器人本体生态，并披露2026年两轮融资。融资和伙伴名单不计收入，客户现场部署仍为公司／媒体宣称；价格、模组SKU、具名付费客户、合同、验收、收入和节能实测均未知。[公司官网](https://www.ebkernel.com/)。

除BrainChip监管财报外，ASICLAND与Orama材料为发行人／伙伴公告，SynSense批量订单和增长率来自参投方文章。融资不计收入；IP评估、参考部署、批产能力、订单、交付和收入分别记录。

| 主体 | 已核实证据 | 商业阶段判断 | 未知项 |
|---|---|---|---|
| BrainChip／AKD1500 | 半年报确认首批2000颗生产批次已收货，最终产量因良率低于预期预计略低于计划；H1收入1222745美元、客户收款813247美元、经营现金净流出11253495美元、期末现金20304971美元；ASICLAND许可和Orama参考部署另有官方公告 | 已进入商业规模制造并具多条采购／授权路径；监管财务可核，但产品、许可、服务和现金流必须拆分 | 2000颗不是客户出货；生产客户、终端工厂、订单金额、AKD1500单独收入、版税和良率修复结果未知 |
| SpiNNcloud／SpiNNaker2 | Sandia 2025年6月4日公告确认Braunfels于3月到货并部署，8月19日CCR再确认；莱比锡2025年10月28日公告确认10月投入运行。py-spinnaker2 v0.8.2标签关联提交日为2026年9月23日，公开镜像可核 | 使用方确认的科研系统部署＋当前公开软件；高于仅发布和厂商部署声明，不等同审计收入 | 两地合同、采购额、支付和供应商收入未知；莱比锡约400万欧元为基础设施资助。药物项目采用int8 DNN；大系统在线训练与完整系统功耗未独立复现 |
| Innatera／Joya | 2026年3月12日事件：Joya完成Pulsar驱动的EdgeCore可集成音频模块；6月22日Innatera官网明确称Joya为客户，并称Pulsar商业可用 | 客户模块／OEM评估与展会展示；强于单纯合作意向 | 终端产品零售、量产数量、合同金额和收入均未披露 |
| Innatera／Synfire | 3月25日宣布，原计划4月底全面开放；PyPI显示0.0.2于6月29日发布，Beta状态、专有许可，发布证明指向Innatera私有GitHub仓库 | SDK与CLI公开可安装；不能继续写成“仅宣布未开放” | 模型库规模、活跃用户、硬件互操作实测与付费模式未知 |
| Innatera／Akeana | 6月23日双方公告Akeana RISC-V处理器技术用于未来边缘AI方案 | 供应链／下一代架构合作，不是当前Pulsar已采用的证据 | IP型号、授权金额、投片节点与产品时间表未知 |
| Mythic／M1／Honda | M1官网给出评估入口；本田2月4日称已投资并联合开发车载SoC；5月19日Mythic完成收购Videantis | M1处于可联系评估；Honda项目为未来联合开发；收购补强数字IP与软件，不证明模拟APU已量产上车 | M1库存、价格、客户数量、出货及收入；Honda量产节点、车型与合同金额未知 |
| Videantis（已被Mythic收购） | Mythic公告称其数字处理器IP已进入逾2500万颗芯片并在汽车项目运行 | 被收购资产有量产履历；该装机量属于Videantis数字IP，不能算作Mythic模拟APU销量 | 交易对价、装机客户、并购后产品整合与新增收入未知 |
| MemryX／MX3与Cascade | MX3官网标为“可批量下单”；8月31日联合稿称Express LUCK已在日常生产线部署；6月扩展多形态Cascade模块 | 从“在产但客户未知”上调为具名工厂部署／批量订购入口 | 部署数量、模块型号、采购金额、复购、毛利和收入未知；稿件由厂商发布，未见审计披露 |
| Aspinity／AML100与AML200 | 当前官网将AML100列为正在出货的生产IC并提供Python SDK；AML200明确为开发中、测试芯片已验证 | AML100为生产／联系式评估；AML200仅测试芯片，二者阶段不能合并 | AML100具名客户、库存、出货量及收入；AML200量产时间和设计定点未知 |
| REEXEN既有边缘芯片 | 2025年投资界转述公司称在多家客户量产并获国际智能眼镜、耳机、助听器品牌订单；客户未具名 | 公司／媒体量产及订单口径，高于纯路线图但低于具名采购和审计财务 | 芯片型号、客户、数量、单价、回款、供应链和收入未知 |
| REEXEN HBF／ADA300／400与服务器 | 当前官网列出完整产品体系与大模型容量／带宽目标，但未提供上市日、数据表、公开评估、价格或客户 | 按方案／路线记录，不能借用既有边缘芯片量产口径 | 流片、样机、开发工具、量产、具名客户及收入全部待核 |
| SynSense B轮 | 参投方华仓资本7月14日确认数亿元B轮，国调二期领投，华仓资本、国海证券投资、宏力达等参与；资金用于脑机接口研发／量产准备和视觉场景规模化 | 参投方一手材料提高融资参与方与用途可信度；融资仍不计收入 | 到账、估值、绝对收入、分产品收入及公司／领投方完整公告未知 |
| SynSense视觉产品／增长口径 | 参投方称类脑视觉产品已具批产能力并在手机、AR/VR、电网、安防、建筑、畜牧获批量订单，近两年年均复合增长率超160% | 比媒体转述更接近一手，但仍是投资方／公司宣称；新增P032按“生产／部署声明”记录 | 未披露型号、客户、数量、金额、交付、收入或审计基数；不能映射为Aeveon或Speck |
| POLYN／VibroSense TMS | 9月28日公司称工程芯片正在交付，用于组装AI胎压传感节点，潜在客户可立即评估 | 工程芯片／客户评估；高于仅流片和实验室验证，低于设计定点及生产出货 | 评估方未具名；订单、AEC-Q、生产良率、数量、价格和收入未知 |
| Prophesee／Sony／OpenMV事件相机生态 | IDS XCP-E IMX636网店显示有现货，XLS-E标为系列生产；LUCID官方称Triton2 EVS已发货。OpenMV的400美元GenX320模组与500美元多光谱事件相机模组均有正式SKU；多光谱模组同步集成GenX320与PAG7936 1MP／120 FPS彩色全局快门，检索时库存0 | 伙伴相机已有公开采购、系列生产或发货证据；OpenMV多光谱模组证明事件流＋彩色帧已有商品化集成入口，但按“商品页／售罄”记录，不能写成当前可采购或终端量产 | 不等于Prophesee传感器销量、世界模型采用、终端设计定点或收入；两款OpenMV模组补货、历史出货、伙伴销售量和客户部署未知 |
| iniVation事件相机 | 当前文档列DVXplorer、DAVIS346等产品；官方商店列公开价格和购买入口 | 开发／研究相机公开可采购；比无价格的联系式获取更成熟 | 库存数量、年度销量、客户构成、收入及是否用于量产终端未知 |
| SynSense Speck／Aeveon | Speck有开发资源但本轮未见公开库存；Aeveon 6月发布页面仅给销售邮箱 | Speck为开发平台获取路径；Aeveon按发布／销售接洽阶段记录 | Aeveon数据表、开发板、价格、生产状态和客户；Speck当前库存与分产品收入未知 |
| 他山传感器／E10A／TS-ECHO | 9月公众号转载称传感器月交付数万枚；E10A已发布；8月26日奥比中光确认数采合作 | 传感器出货声明、芯片发布与合作协议分账；NVIDIA收录为仿真资产事实，不是芯片认证 | E10A量产客户、采购付款、分产品收入、视触方案验收未知；80%份额缺分母，不作统计 |
| World Labs／SceniX／AMD | World Labs已收购SceniX并公开R2S2R训练评估链；Atlas面向少数伙伴早期访问；AMD已签约拟以约82亿美元全股票收购World Labs | World Labs属于模型／系统层；SceniX并入已完成，AMD交易仍待监管和交割，预计2026年底完成 | World Labs客户、合同、收入和AMD交割未知；未见事件数据、SNN或专用类脑芯片证据 |
| Syntiant／Knowles消费MEMS麦克风 | 2024年12月30日以1.5亿美元现金加股票完成收购；被收购业务2023年收入约2.56亿美元 | 形成传感器＋NDP＋模型＋软件整合路径；收购已完成 | 2.56亿美元不是NDP芯片收入；收购后收入拆分、NDP出货和协同客户未知 |

### SpiNNcloud科研部署与软件证据追溯

| 追溯编号／证据 | 事件日期 | 发布日期 | 本轮核查及边界（检索2026-10-02） |
|---|---|---|---|
| P033／T018：[Sandia原文](https://www.sandia.gov/research/news/brain-based-computing-for-nuclear-deterrence-solutions/)与[CCR复核页](https://www.sandia.gov/ccr/news/sandia-deploys-spinnaker2-neuromorphic-system/) | 2025-03，仅到货月份 | 2025-06-04；CCR 2025-08-19 | 使用方确认Braunfels部署；初始合作已执行热流随机游走模拟，属于数值任务。NNSA资助科研试验平台；未知供应商采购额、支付、收入和复购。机箱容量不推算实装芯片量；18倍能效宣称缺同任务边界，不参与排名 |
| P033／T019：[莱比锡德文原文](https://www.uni-leipzig.de/newsdetail/artikel/vom-gehirn-inspiriert-supercomputer-staerkt-ki-forschung-an-der-universitaet-leipzig-2025-10-28) | 2025-10，仅投运月份 | 2025-10-28 | 大学确认系统投入运行。约400万欧元是科研基础设施资助，不等于设备采购额或SpiNNcloud收入。未来万倍加速是目标；页脚2026-10-02更新时间不当作新事件或新闻发布日期 |
| 路线核对：[ScaDS.AI项目全文](https://scads.ai/research/ai-algorithms-and-methods/methods-and-hardware-for-neuro-inspired-computing/projects/drug-discovery-on-the-spinnaker2-neuromorphic-supercomputer/) | 项目期2022-07-01至2025-06-30；具体实验日未知 | 页面发布日期未标 | 机构文档说明模型与输入从32bit量化到8bit，在Arm架构重实现并使用int8 DNN加速；不能把药物筛选计成SNN训练。转移到制药行业是后续目标，未核到药企付费客户 |
| T020：[官方标签](https://gitlab.com/spinnaker2/py-spinnaker2/-/tags)、[当前SDK文档](https://spinnaker2.gitlab.io/py-spinnaker2/)与[Docker Hub](https://hub.docker.com/r/spinnaker2/py-spinnaker2/tags) | v0.8.2关联提交2026-09-23 | 标签有发布说明；独立发布日期和首推日未核 | 首次公开Docker镜像可交叉确认；Brian2教程可无板学习，NIR导入与实时脉冲教程可读。本轮未下载镜像或独立跑板，公开软件不证明大系统EventProp训练或边端持续学习量产 |

分析：SpiNNcloud应由“商业可用、科研训练研究平台”补充为“有两地使用方确认科研部署、当前软件公开”的事件通信与混合计算系统。对芯灵而言，若定位包含通用动态状态和物理计算，竞争已涉及具名科研部署、非认知数值任务及DNN执行，而不能只比较SNN架构标签；仍需同任务端到端基线证明差异。端侧供货、客户支付、规模化训练、收入与世界模型事件数据证据仍未知。

分析：BrainChip仍是本报告中唯一有监管财报绝对收入锚点的核心类脑厂商。本轮把其制造判断从“发行人出货声明＋开发硬件可买”收紧为“首批2000颗已收货、商业规模制造启动，但最终产量受良率低于预期影响”；H1收入与客户收款、经营现金流、期末现金和客户集中度分列。ASICLAND扩大设计服务渠道，Orama提供伙伴参考部署，但两者均不能直接认定生产客户或收入。SynSense的证据强度由媒体转述上调到参投方确认融资与批量订单口径，但仍缺绝对收入、具名客户和型号映射。Innatera未发现新的终端出货或收入证据。

## 对芯灵竞争位置的初步含义

这里只讨论外部竞争关系，不对未重新读取的芯灵内部BP或微架构作技术结论。比较对象是此前讨论的类脑模块加第三方端侧AI、本地应用与数据闭环构想。

1. **传感前端不是空白，而且事件相机已经可买。**Prophesee／Sony生态的伙伴相机出现现货、系列生产与发货证据，iniVation也列出当前型号和公开价格；OpenMV进一步把事件流与彩色全局快门集成为公开定价模组，虽然检索时售罄。芯灵不能把“能接收事件流”或“可做多模态采集”本身视为差异。真正需要证明的是可编程时间状态、跨传感融合、闭环动作与整机任务收益。上述供货证据不等于传感器或SNN芯片收入。

2. **可采购硬件之外，良率、现金与客户集中度成为新的比较维度。**BrainChip已有2000颗首批生产批次、M.2／PCIe／第三方开发板和ASICLAND渠道，但监管文件同时披露良率低于预期、H1经营现金净流出1125万美元、>10%客户贡献约80.5%。SynSense出现参投方批量订单口径，却没有型号、金额、交付和绝对收入。对芯灵而言，竞争不再只看“有没有芯片”：需要同步证明稳定良率、可持续现金能力、具名客户复购、工具链迁移和同任务整机收益。

3. **数据闭环与商业边界正在合并。**具脑磐石已经把认知世界模型延伸为按台／按年许可、软硬一体模组、行业方案和RaaS，并把维泛OmniDimension与NVIDIA Jetson列入边缘生态；这使其不再只是模型合作候选，也开始在方案和持续服务层与芯灵重叠。分析：芯灵需明确是做横向芯片／SDK供应商，还是向模组、行业方案与RaaS延伸，并用事件数据对训练样本效率、长尾覆盖、端侧时延和整机能耗的同任务实测建立差异。现有伙伴名单、融资和公司所称客户现场部署都不证明付款、验收或收入；具脑节能幅度仍未实测，亦未证明采用SNN芯片。

4. **Dynamic State Processor需要单独的任务比较。**应分别看可编程状态、时间尺度、在线适应、传感融合、控制闭环与工具支持。尚未完成同任务实测，不能宣布其优于这些路线。

5. **最危险的替代方案可能没有类脑标签。**MemryX已有具名工厂部署与批量订购入口；ST、NXP开发硬件及Synaptics、Hailo、Ambiq的购买路径又把MCU／DSP／NPU生态压力具体化；Aspinity AML100为生产模拟前端，Mythic通过本田联合开发和Videantis收购补足车载与软件能力。对芯灵而言，仅证明DSP更低功耗或“类脑”不足以形成采购理由；必须在同一任务上证明时间状态建模、在线适应、传感融合、闭环响应、软件迁移和整机成本的净优势。这是基于公开证据的竞争分析，不是市场份额结论。

事实依据来自前述竞争矩阵中的官方产品和系统资料；此节为分析性推论。

## 持续检索与报告维护规则

目标是逐步扩大覆盖并提高证据质量，而不是不断增加未经核实的公司名称。首版之后，保留同一主报告并更新有变化的章节。

每轮检索轮换主题：核心类脑芯片；事件视觉；模拟AI与存算；触觉与多模态；科研与在线学习；传统低功耗替代；融资、客户、收入与供应链；小公司发现与核实；国内类脑大模型、世界模型与类脑智能体。通过微信公众号原文或注明出处的全文转载发现线索，沿官网、投资者与客户交叉核验；明确原文、转载和搜索索引的证据差别。结合中英文、公司原生语言、别名、创始人、产品型号、客户与合作方反向检索。

来源优先级：公司产品文档、监管披露、客户公告、论文与机构官网优先；行业媒体交叉验证；社交平台、展商名单与招聘仅作线索。专利只证明申请或授权，不证明产品使用与量产。全文可读时不只依赖搜索摘要。

每项新增记录至少保留：主体、产品、技术分类、应用、事件日期、发布日期、检索日期、来源URL、证据状态、性能测试边界和未知项。合并重复报道，纠正旧结论，标记撤回与停止销售。性能统一记录准确率、输入、时延、计算核心与整机功耗、制程、模型、在线学习范围和代码可获得性。

**下一轮优先缺口：**轮换至事件视觉，优先核实Hearth迁移文档、GenX320补货、Aeveon／Speck实际供货、事件数据是否被世界模型用于训练或部署。核心芯片保留芯灵自身量产／付费客户基线、SpiNNcloud采购支付／收入／规模化训练、Innatera终端出货未决项。国内世界模型继续核实具脑磐石具名付费客户／模组SKU／节能实测、最终序列ASIC与收入来源、WorldMind产品、羲悉客户验证。

### 更新日志

2026年10月2日：建立首版，完成市场口径检查、核心与相邻竞争池、2026动态和财务证据锚点。尚未完成全球逐公司穷尽调查、客户合同与统一实测。

2026年10月2日补充：国内公众号与模型生态专题。新增维泛智能、具脑磐石、最终序列、WorldMind四个证据较完整主体，以及羲悉智能、中科类脑两个待核线索；修正国内覆盖偏硬件的口径，单列科研项目。使用高校与公司官网、公众号全文转载、融资媒体与创始人访谈；原公众号全文未全部可访问。下轮优先核实客户侧采购、测试芯片与量产芯片区别、已实现收入、羲悉主体映射及事件数据世界模型实证。

2026年10月2日传统端侧替代专题：新增爱芯元智与Syntiant产品阶段及合作方证据，修正MemryX在产、设计中与规划产品区分；相邻矩阵与首页地图同步。覆盖官方产品、生态代码、发行人半年报摘要及Arduino合作方。缺口：港交所财报全文、具名客户付费、统一整机功耗与部署任务复验。下轮转向在线学习与科研平台，优先核实片上权重更新范围和部署证据。

2026年10月2日在线学习与科研平台专题：修正BrainChip末层二值学习、灵汐GPU训练与头部学习的范围；补入达尔文悟空正式发布及SpiNNaker2多层EventProp研究，主矩阵与首页26主体索引同步。核查Akida联邦预印本全文与代码：77%为最优策略上界，README约800次与论文约1580次待对齐；未独立复现，不计新增客户或收入。覆盖英文SDK／论文／GitHub及中文实验室、高校与平台文档。缺口：当前软件交付版本、规模化训练、学习客户付费、完整系统能耗及代码版本一致性。下轮优先融资／收入／客户供应链，核验SynSense B轮一手公告和Innatera Synfire客户交付；学习专题后续复核Lava、DarwinKit及算法更新实测。

2026年10月2日融资、客户与供应链专题：将Innatera从“伙伴演示”上调为“已有具名客户模块与公开Beta工具链”——Joya EdgeCore可集成音频模块、MWC页面明确客户关系，Synfire 0.0.2于6月29日发布；新增Akeana下一代RISC-V合作边界。SynSense B轮补齐6月30日同日报道、联合领投及跟投方，保留“未取得公司或领投方完整一手公告”；近两年收入复合增长超160%仅作厂商转述，未当作绝对收入。主矩阵、应用表、时间线、商业化锚点和首页26主体索引已同步。缺口：Joya终端出货与采购量、Synfire活跃模型／互操作、SynSense到账估值和审计收入。下轮转向小公司发现与退出收购，优先核实真实ASIC、停业／收购及路线转向。

2026年10月2日小公司与退出收购专题：确认GrAI Matter Labs已于2024年2月被Snap Group SAS吸收合并并注销，移出独立活跃供应商口径；工商文件中的6331万欧元资产与864万欧元负债是集团内合并转入，不当作收购价。POLYN由“工程芯片／验证实验室”上调到“VibroSense TMS工程传感节点可供潜在客户评估”，仍不计量产、订单或收入；同时确认VibroSense IIOT仍为仿真原型且商务暂停。Aspirare、Vivum、Grayscale AI、Neurobus按芯片、模型、事件感知系统与嵌入式集成重新分层，未证实自研ASIC者不计芯片供应商。应用表、相邻矩阵、时间线、商业化锚点和首页竞争索引已同步。缺口：POLYN具名评估方与设计定点、Aspirare硅证据、Vivum协处理器形态及GrAI技术在Snap产品中的落地。下轮转向国内类脑大模型、世界模型与智能体，优先核实客户付费、ASIC和事件数据实证。

2026年10月2日国内类脑大模型、世界模型与智能体专题：最终序列由“收入未知”上调为“已有公开收入口径”——《杨浦时报》5月称年营收进入千万元，南京市政府8月稿称已实现3000万元；仍属未审计口径，且大疆、道通仅为洽谈，不写成客户。具脑磐石两篇预印本已可核验，阶段从发布声明上调为“论文与定性真机演示”，但代码／模型权重未开放、节能幅度官网明确未实测。羲悉智能完成主体映射并从待核线索上调：官网可读、1B／8B阶段验证、数千万元种子轮；30B对标万亿模型、机构客户与节能仍属公司宣称。维泛补入OmniRT赛事工程使用和乐聚适配合作，但9月外部开放与付费仍未证实；WorldMind种子／天使标签合并为同一早期轮次。对芯灵的影响：最值得提高警惕的是最终序列在飞行具身场景的系统交付与收入先发，而非其ASIC；具脑磐石和羲悉更可能成为模型／系统合作方或方案层替代，尚非已证实的芯片正面竞争。主表与首页竞争索引已同步。下轮转向核心SNN／神经动力学芯片，优先核实芯灵自身产品阶段、量产和付费客户基线，以便重新校准相对位置。

2026年10月2日核心SNN／神经动力学芯片专题：BrainChip AKD1500由“发行人称初始生产出货”进一步上调为“已有公开采购链路”——7月M.2模块、9月PCIe开发卡可从公司网店购买，10月2日检索时第三方Neuromorphyx的BrainBoard1500显示现货并可立即发货。严格保留边界：BrainChip称生产数量交付多家客户，但客户未具名；可购买开发硬件不等于终端设计定点、规模部署或经审计的AKD1500收入。当前MetaTF仍把Edge Learning限定为Akida v1末层二值FullyConnected，不能扩大成整网片上训练。对芯灵的影响：BrainChip在硅片可得性、模块／板卡层级和生态采用路径上形成更直接压力；芯灵若要证明差异，需要同时给出可购硬件、模型迁移、具名试点和收入证据，而不仅是架构或功耗叙事。主矩阵、时间线、商业化锚点和首页竞争索引同步。缺口：AKD1500具名客户、部署量、复购、良率与产品收入；Innatera Pulsar、SynSense Rigi／Aeveon的实际供货对比。下轮转向事件视觉专题。

2026年10月2日事件视觉专题：修正Prophesee／Sony与iniVation商业成熟度——IDS IMX636相机显示现货或系列生产，LUCID称Triton2 EVS已发货；iniVation当前商店列DVXplorer、DAVIS346等价格与购买入口。OpenMV GenX320模组有商品页但本轮检索时售罄。SynSense Aeveon仍按发布／销售接洽记录，未见公开数据表、开发板、价格、库存或客户；Speck有开发资源但未见当前公开库存。软件侧，Prophesee已宣布OpenEB与独立Metavision SDK结束生命周期，但OpenEB检索时仍公开，新学术用户对SDK 4.6的访问已于8月31日结束，Hearth公开迁移包未找到。对芯灵的影响：事件采集硬件已不是空白，差异应落到时间状态处理、传感融合、闭环动作、工具链兼容和可验证整机收益，不能只用DVS或SNN标签。缺口：伙伴相机销量与传感器收入、终端设计定点、Aeveon和Speck供货、GenX320补货、Hearth迁移文档。下轮转向模拟AI、存算与数据流。

2026年10月2日模拟AI／存算／数据流专题：MemryX由“在产但客户未知”上调为具名工厂部署与批量订购入口；Express LUCK联合稿称系统已用于日常生产线，但数量、金额和收入仍未知。新增Mythic为重点模拟CIM竞争者：本田已投资并联合开发车载SoC，Mythic已收购Videantis；严格保留边界，Videantis逾2500万颗芯片装机是其数字IP履历，不计作Mythic模拟APU出货。纠正Aspinity阶段：AML100为生产IC，AML200仅测试芯片验证。九天睿芯拆分为“既有边缘芯片的公司／媒体量产口径”与“HBF、ADA300／400、服务器的官网路线”，不相互借用成熟度。Blumind、Rain、Synthara分别按联系式硅验证产品、可授权数字CIM IP、硅验证IP记录；新增AnalogAI和semiQa为早期IP长尾。对芯灵的影响：采购替代已从概念芯片扩展到具名工厂部署、生产模拟前端和车载联合开发，芯灵需要以同任务整机证据证明时间状态、闭环、多模态与软件迁移优势，而不能只依赖类脑标签。下轮转向机器人触觉与多模态。

2026年10月2日机器人触觉与多模态专题：将他山从官网定位上调为E10A发布／演示、NVIDIA可用仿真资产及合作方确认视触数采；补入IPO早知道全文转载的月交付声明，仍保留未审计、芯片与传感器分账和无方法市占率不采纳的边界。新增GelNeuro Speck2f直接触觉事件推理和SpikingTac动态状态重建两项研究，不计新增企业或商业销量。主表、应用表、24组产品阶段、竞争地图和下载数据同步；覆盖中文展商／公众号转载、英文合作方、NVIDIA、GitHub及论文全文。缺口：E10A量产与SNN范围、采购付款、视触验收、整机功耗和世界模型增益；下轮转向低功耗传统替代。

2026年10月2日低功耗MCU／DSP／NPU替代专题：新增ST、NXP、Synaptics、Hailo、Ambiq五个相邻替代主体并拆分7组产品证据。ST STM32N6记录量产SKU与直购开发板；NXP RT700 EVK核到Active、2套现货和公开价格；Synaptics SL2610核到三家分销入口与Torq／Coral NPU教程；Hailo-10H核到商业可用和全球订单；Ambiq仅将Apollo510 EVB计可采购，Apollo510 Lite芯片仍按库存0、预计到货记录。公开工具链均以推理为主，未见可核在线权重更新；不使用跨任务TOPS／功耗排名。主表、应用表、31组产品阶段、12条事件、首页竞争地图与下载数据同步。对芯灵的影响：成熟替代已在可采购硬件、接口与工具链层形成更强压力，差异必须落到可编程时间状态、在线适应和同任务整机收益。缺口：终端design win、出货／收入、Apollo510 Lite实际到货及可比实测；下轮转向融资、收入、客户与供应链。

2026年10月2日融资、收入、客户与供应链专题：BrainChip监管半年报将AKD1500制造证据细化为首批2000颗已收货、进入商业规模制造，同时披露最终产量因良率低于预期预计略低于计划；H1收入122.3万美元、客户收款81.3万美元、经营现金净流出1125.3万美元、期末现金2030.5万美元，>10%客户收入约占80.5%。新增ASICLAND IP分销许可与Orama工业检测参考部署，均保留生产许可／终端工厂／收入未证实边界。SynSense证据由媒体转述上调为参投方华仓资本确认B轮及批量订单口径，但仍无型号、具名客户、金额、交付和绝对收入。主矩阵、商业化表、32组产品、14项事件、交互地图与Excel同步。对芯灵的影响：竞争门槛已从芯片可得性扩展到良率、现金、客户集中度和渠道兑现；芯灵需用具名复购、稳定供货及可审计收入校准差异。缺口：BrainChip良率修复与AKD1500客户收入、SynSense订单映射和绝对营收、Innatera终端出货；下轮转向小公司发现和退出收购。

2026年10月2日小公司、退出收购与世界模型整合专题：新增World Labs为模型／系统层主体，记录其7月收购SceniX、9月Atlas早期访问及AMD约82亿美元拟收购；严格标为交易未完成、不是类脑芯片公司、未核到事件数据或SNN。补齐SynSense 100%收购iniVation但苏黎世实体继续运营，以及Syntiant 1.5亿美元收购Knowles消费MEMS麦克风业务；被收购业务2023年2.56亿美元收入不计NDP芯片收入。主表、并购追溯、16项事件、35主体交互图和Excel同步。对芯灵的影响：世界模型竞争从数据采集扩展到R2S2R仿真和主流芯片平台协同；需证明事件数据对训练、评估或部署的增量价值。缺口：AMD交易交割、World Labs／SceniX客户与收入、SynSense／iniVation交易金额与整合收入、Syntiant传感器和NDP收入拆分。下轮继续核实国内世界模型客户付费、ASIC和事件数据实证。

2026年10月2日国内世界模型与商业交付专题：具脑磐石由“研究／原型”上调为“已定义商业产品形态／商务接洽”。官网明确按台／按年模型许可、软硬一体模组、行业方案和RaaS四种交付路径，并列出NVIDIA Jetson、维泛OmniDimension及多家机器人本体伙伴；媒体转述公司称已在巡检／值守客户现场部署。融资口径新增2026年1月数千万元种子轮和5月亿元级天使轮，融资不计收入。严格保留边界：未见公开价格、模组SKU／数据表、具名付费客户、合同、验收、收入或节能实测；V2.0“数据需求约为VLA十分之一”是未来目标，未证明采用SNN芯片。主表、商业化锚点、产品阶段、17项事件、首页竞争图和Excel已同步。对芯灵的影响：具脑磐石已从潜在模型合作方变为模型许可、模组、行业方案和RaaS层的直接系统竞争者，同时也是端侧芯片生态入口；芯灵需明确横向芯片／SDK与纵向方案的边界，并用同任务整机数据证明事件数据与动态状态处理的增量。缺口：具名付费客户、模组SKU、合同验收、收入、节能实测及融资投资方口径差异。下轮转向核心SNN／神经动力学芯片。

2026年10月2日核心芯片科研部署与公开软件专题：修正SpiNNcloud仅“商业可用／研究训练平台”的覆盖不足。Sandia使用方确认2025年3月Braunfels到货和部署、已开展热流随机游走模拟；莱比锡确认2025年10月系统运行。约400万欧元为科研基础设施资助，不计供应商收入；药物项目为int8 DNN，不并入SNN训练。新增py-spinnaker2 v0.8.2标签与公开Docker镜像证据，标签关联提交日9月23日与首推日分开。主矩阵、应用表、商业锚点、P033、T018–T020及35主体／33产品／20事件图表同步。覆盖英文客户机构、德文大学、ScaDS.AI项目、官方GitLab／文档／Docker Hub；无独立实机复现。对芯灵影响：通用动态状态定位须与已部署的混合计算及数值任务竞争，不能只凭SNN标签。缺口：合同支付、供应商收入、复购、规模化训练、同任务整机功耗和世界模型事件数据。下轮转向事件视觉，核实Hearth迁移、芯片供货与世界模型使用实证。

2026年10月2日事件视觉与多模态采集模组复核：新增P034——[OpenMV多光谱事件相机模组](https://openmv.io/products/multispectral-event-camera-module)公开500美元价格、SKU与规格，把Prophesee GENX320事件流和PAG7936 1MP／120 FPS彩色全局快门同步集成，仅兼容OpenMV N6；检索时库存0并明确售罄，故单列“商品页／售罄”，不写成当前可采购、已出货或终端量产。[400美元GENX320模组](https://openmv.io/products/genx320-camera-module)同样仍售罄。SynSense Aeveon只新增日本分销商询价入口和两页宣传目录，仍无公开数据表、开发板、价格、库存或具名客户；Speck可读到2025年12月更新的开发套件手册，但未核到当前库存。Prophesee 5.3.1文档仍在线、资源页仍指向OpenEB，不改变公司2026年6月15日已宣布OpenEB与独立Metavision SDK结束生命周期的判断；Hearth公开迁移包仍未找到。世界模型检索中，EA-WM的“event-aware”指视频时序差分，不是事件相机数据，未计作类脑／事件视觉采用。对芯灵影响：事件流＋彩色帧的同步采集已有明确商品化集成入口，传感融合本身不是空白；但售罄、无客户和无训练实证意味着竞争压力主要在开发生态，不足以证明规模化市场。缺口：OpenMV补货与历史出货、终端设计定点、Hearth迁移、Aeveon／Speck供货、事件数据进入世界模型训练或闭环部署的具名证据。下轮转向模拟AI、存算与数据流。
