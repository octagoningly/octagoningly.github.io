---
title: "程序设计C++"
date: 2026-10-20 14:59:39
categories:
  - 随笔
source_note: "程序设计C++.md"
---
# 第0章：课程介绍

## 0.1 课程运行与成绩

> [!knowledge]
> ==🔴课程组织==
> - 主讲教师：明方飞；办公室：南校 557 栋；邮箱：mingff@mail.sysu.edu.cn。
> - 课件、作业与截止时间通过班级微信群通知；作业的提交邮箱以作业说明为准。
> - 每次课由教师讲授基础知识，并安排在机房上机编程练习。
> ==🔴成绩评定==
> - 期末考试占 $40\%$；考勤／课堂表现占 $20\%$；平时作业／代码占 $40\%$。
> - 平均每周一次作业；截止时间见群通知，晚交成绩按 $70\%$ 计。
> - 期末考试覆盖第 1–10 章，题型为选择题、程序阅读分析题和编程题。

## 0.2 教材、作业与学习方式

> [!knowledge]
> ==🔴教材与范围==
> - 教材为 Walter Savitch 著、周靖译、清华大学出版社的《C++ 入门经典（第 10 版）》。
> - 本课程教学内容为第 1–10 章。
> ==🔴作业提交==
> - 作业发送至助教邮箱；邮件主题格式为 `程序作业-第n周作业-(姓名)-(学号)`，例如 `程序作业-第1周作业-张三-23333000`。
> - 通常提交 PDF；项目作业提交 `.cpp` 源文件。具体格式以作业要求为准。
> ==🔴学习建议==
> - 编程是“肌肉记忆”：**看懂不等于会写**，需要亲手敲写全部代码。
> - 报错是常态；先排查代码，而不是先怀疑电脑或编译器。
> - 编码前先明确输入、输出和步骤；卡住超过 20 分钟时，及时向同学、助教或老师提问。

## 0.3 编程工具

> [!knowledge]
> - 本科课程作业推荐使用 ==Dev-C++==，课件给出的下载地址为 <https://sourceforge.net/projects/orwelldevcpp/>。
> - 在开发环境中，菜单栏用于创建、保存、编译和运行代码；代码编辑区用于编辑程序；工作台信息区用于查看编译、运行等反馈。

## 0.4 程序与程序设计

> [!knowledge]
> ==🔴程序的作用==
> - 程序是人与机器之间的“沟通语言”：把==已知信息==作为输入，写成==无歧义的步骤==，得到==可检查的结果==。
> - 机器不会理解“大概意思”，只会严格执行指令；程序设计首先要把问题说清楚，而不仅是记住符号。
> - 写下的每一步都应能由别人重复执行。

## 0.5 计算工具与编程语言的发展

> [!knowledge]
> ==🔴计算工具简史==
>
> | 时间 | 工具／事件 | 课件强调的意义 |
> | --- | --- | --- |
> | 公元前 | 算盘 | 早期计算工具 |
> | 1642 | 帕斯卡计算器 | 机械计算 |
> | 1801 | 雅卡尔织布机 | 用打孔卡控制花纹 |
> | 1837 | 分析机（设计） | 可编程计算思想 |
> | 1936 | 图灵机（理论） | 计算的理论模型 |
> | 1946 | ENIAC | 通用电子计算机 |
> - 雅卡尔织布机中，打孔卡的“有孔／无孔”控制织针“抬起／落下”；更换一叠卡片即可改变花纹而不用改造机器。这是程序控制机器思想的雏形，且“有孔／无孔”类似今天的 $0$ 和 $1$。
> - ENIAC 重 27 吨、占地 170 ㎡，每秒可做 5000 次加法；课件以手机每秒上千亿次运算作对比。==摩尔定律==指集成电路中晶体管数量大约每两年翻一番，它长期推动了计算能力和成本效率的提升。
> ==🔴编程语言演进==
>
> | 时期 | 语言／形态 | 特点 |
> | --- | --- | --- |
> | 1940s | 机器语言 | 直接以 $0$ 和 $1$ 表示指令 |
> | 1950s | 汇编语言 | 以如 `ADD X Y Z` 的助记符表达指令 |
> | 1957 | FORTRAN | 第一门高级语言 |
> | 1972 | C | 为 UNIX 而生 |
> | 1985 | C++ | C 加面向对象 |
> | 1995 | Java／Python | 互联网时代的重要语言 |
> | 2020s | AI 辅助 | 从自然语言生成代码 |
> - 总体趋势是表达越来越接近人、越来越远离机器细节。C++ 位于两者之间：既可读，又具有较高性能。

## 0.6 C++ 的使用场景与 AI 辅助编程

> [!knowledge]
> ==🔴C++ 的适用领域==
> - C++ 适用于重视性能和底层控制的领域，例如操作系统与浏览器内核（Windows、Chrome）、游戏引擎（Unreal、Unity 底层）、嵌入式与机器人、芯片设计软件（EDA）、高频交易，以及许多 AI 大模型的底层实现。
> - 课件指出，C++ 因接近硬件而长期处于编程语言流行度排行榜前列。
> ==🔴AI 辅助编程的边界==
> - 大模型可以根据自然语言描述生成代码、解释代码、查找 bug 和编写注释，降低了编程的入门门槛。
> - 工作链条是：人描述需求 $\rightarrow$ AI 编写代码 $\rightarrow$ 编程工具编译与测试 $\rightarrow$ 人判断并负责。
> - **能编译不等于能正确运行，也不等于满足真实需求。**

# 第1章：计算机与 C++ 编程入门

## 1.1 计算机系统

> [!knowledge]
> ==🔴程序、软件与硬件协作==
> - ==计算机程序==是计算机要遵循的一组指令；计算机不会自行“思考”，而是按指令逐步执行。
> - ==计算机软件==是各种程序的集合，包括用于编写代码的编辑程序（Editor，如 Dev-C++ 编辑器）、把代码翻译成机器语言的编译程序（Compiler），以及 Windows 等系统软件。
> - 本课程的基本链条是：用编辑器写程序 $\rightarrow$ 用编译器翻译 $\rightarrow$ 由计算机执行。
> ==🔴计算机的五大组成==
> - 输入设备、主存储器（内存）、处理器（CPU）、输出设备、辅助存储器共同构成计算机系统。
> - 数据从输入设备进入内存，处理结果从内存送至输出设备；CPU 和内存合称==主机==。
> - 程序运行时，指令和数据先装入内存，CPU 再从内存中逐条取出并执行指令。

### 1.1.1 输入、输出与存储

> [!knowledge]
> ==🔴输入与输出设备==
> - 输入设备把信息送入计算机，例如键盘、鼠标、扫描仪和麦克风；输出设备把结果呈现给人，例如显示器、打印机和音箱。
> - 键盘和显示器合称==终端==：cin 用于读入，cout 用于输出。
> - 触摸屏、硬盘和 U 盘既可输入也可输出信息。
> ==🔴内存、位、字节与地址==
> - 主存储器可理解为一排按编号排列的字节；该编号就是==地址（address）==，用于定位某一个字节。
> - ==位（bit）==只能是 $0$ 或 $1$；==字节（byte）==通常由 8 个 bit 组成。
> - 一个 int 整数通常占连续的 4 个字节；其地址是第一个字节的地址。
> ==🔴容量单位==
> - $1\ \mathrm{KB}=1024\ \mathrm{Byte}$，$1\ \mathrm{MB}=1024\ \mathrm{KB}$，$1\ \mathrm{GB}=1024\ \mathrm{MB}$。
> - 短微信文字约几十 Byte，照片约 3–5 MB；常见电脑内存为 8–16 GB，硬盘为 512 GB–1 TB。一个 int 通常占 4 Byte，内存可容纳几十亿个 int。
> - $1024=2^{10}$，符合二进制的整幂；硬盘厂商常按 $1000$ 计算，故标称 1 TB 的硬盘在系统中约显示为 931 GB。

> [!knowledge]
> ==🔴主存储器与辅助存储器==
>
> | 项目 | 主存储器（内存） | 辅助存储器（硬盘、U 盘等） |
> | --- | --- | --- |
> | 内容 | 正在运行的程序和数据 | 长期保存的程序和数据 |
> | 速度 | 快 | 相对慢 |
> | 断电后 | 内容消失 | 内容保留 |
> - 外存的数据以==文件（file）==形式组织，例如 hello.cpp。程序的执行路径为：硬盘 $\rightarrow$ 装入内存 $\rightarrow$ CPU 执行；双击 .exe 时，操作系统完成装入步骤。
> - 代码应及时用 Ctrl+S 保存，否则关机后未写入外存的内容会丢失。
> ==🔴位模式的解释==
> - 对 CPU 而言，数据和代码在底层都是位模式；例如 01000001 可按解释规则表示字符 'A'、整数 65，也可在特定机器架构中表示指令。
> - **位模式的意义由编码、数据类型和上下文决定。**

### 1.1.2 处理器、操作系统与语言翻译

> [!knowledge]
> ==🔴CPU==
> - CPU 的两类能力是算术逻辑运算，以及控制下一条要执行的指令。
> - 基本执行循环为“取指令 $\rightarrow$ 译码 $\rightarrow$ 执行”，每秒可重复数十亿次。3.0 GHz 表示每秒约 30 亿个时钟周期，而不同指令可占用不同数量的周期。
> - 死循环的问题不在于 CPU 过快，而在于程序没有满足退出条件。CPU 只直接认识机器语言，因此需要编译器翻译 C++。
> ==🔴操作系统（Operating System）==
> - 操作系统是管理计算机资源的系统软件：为程序分配 CPU 时间和内存、管理文件、提供桌面／窗口／命令行等人机交互界面。
> - 程序运行在操作系统之上；双击 .exe 后，操作系统把它装入内存并启动。
> - Windows、macOS、Linux 和 Android 都是操作系统。
> ==🔴语言层次与翻译==
>
> | 语言层次 | 表达方式 | 与机器的关系 |
> | --- | --- | --- |
> | 机器语言 | 由 $0$、$1$ 构成 | CPU 唯一可直接执行的语言 |
> | 汇编语言 | 如 ADD X Y Z | 为机器指令命名，稍易记忆 |
> | 高级语言 | 如 z = x + y; | 接近人类表达，需翻译为机器语言 |
> - C++、Java 和 Python 都是高级语言；本课程学习 C++。
> - 编译器把 C++ ==源代码==翻译成==目标代码==；链接器把目标代码和输入输出库等库的目标代码连接，生成==可执行程序（.exe）==。在 Dev-C++ 中按 F11 会自动完成整套过程。

## 1.2 编程和问题求解

> [!knowledge]
> ==🔴算法与程序==
> - ==算法（algorithm）==是解决问题的一系列精确指令；例如泡方便面的步骤可写为“烧水 $\rightarrow$ 放面饼 $\rightarrow$ 加调料 $\rightarrow$ 等 3 分钟 $\rightarrow$ 吃”。
> - 好算法的每一步必须精确、无歧义、可执行，并且步骤有限、最终能结束。“等 3 分钟”满足精确要求，“等一会儿”“适量”“搅拌”则可能让不同人做出不同动作。
> - ==程序==是用程序设计语言写出的、可由计算机执行的算法。
> ==🔴算法示例：统计名字出现次数==
> 1. 令“计数”为 0。
> 2. 从头到尾依次查看名单中的每个名字；若该名字是目标名字，则令“计数”加 1。
> 3. 全部查看完后，计数即为答案。
> - 该算法已体现程序的三种基本结构：==顺序==、==分支（如果）==和==循环（重复）==。

> [!knowledge]
> ==🔴程序设计过程==
> - 问题求解阶段：问题定义 $\rightarrow$ 算法设计 $\rightarrow$ 桌面检验（手算验证）。
> - 实施阶段：翻译成 C++（编码） $\rightarrow$ 编译、运行、测试 $\rightarrow$ 得到可运行程序。
> - 测试发现问题后，回到前面的阶段修改是正常过程。
> ==🔴编码前的检查==
> - 先明确输入是什么、输出是什么，以及输出应呈现成什么样。
> - 用一组简单数据手动走一遍算法；常见失败是题意尚未读懂就编码，写完才发现理解错误。

> [!knowledge]
> ==🔴面向对象程序设计（OOP）简介==
> - 面向对象程序设计把软件看作一群互相协作的对象；==对象 = 数据 + 行为==。例如“学生”的数据包括学号、姓名，行为包括选课、考试。
> - 三个基本特性：==封装==把数据和行为打包、仅对外留下接口；==继承==让新对象复用已有对象的特征；==多态==让同一接口调用不同对象时表现出不同行为。
> - 本章只建立印象；第 10 章学习“类”时正式展开。

## 1.3 C++ 入门

### 1.3.1 C++ 与开发环境

> [!knowledge]
> ==🔴C++ 的由来==
> - 语言谱系为 BCPL $\rightarrow$ B $\rightarrow$ C $\rightarrow$ C++。
> - C 语言诞生于 20 世纪 70 年代的贝尔实验室，由 Dennis Ritchie 为开发 UNIX 设计；C++ 由 Bjarne Stroustrup 于 20 世纪 80 年代在贝尔实验室发展，在 C 的基础上加入面向对象机制。
> - 名称中的 ++ 是自增运算符，表示“在 C 的基础上更进一步”。
> ==🔴Dev-C++==
> - 本课程统一使用 Dev-C++：体积小、安装简单，对零基础友好；课堂演示和作业检查以它为准，以免其他环境带来差异。
> - 课件指定官网下载地址为 <https://sourceforge.net/projects/orwelldevcpp/>，选择 Dev-C++ 5.11（自带 TDM-GCC 编译器）。
> - 新建“代码文件”，写入代码后通过“文件／保存”或 Ctrl+S 保存；之后先编译、再运行以查看控制台结果。

### 1.3.2 第一个程序与文件管理

**[ 例题 ] Hello World**
~~~cpp
#include <iostream>
using namespace std;

int main()
{
    cout << "Hello World!" << endl;
    return 0;
}
~~~

解
1. #include <iostream> 包含输入输出库；using namespace std; 使后续可直接使用 cout。
2. main 是主函数，程序从此处开始执行；cout 输出文字，endl 表示换行。
3. return 0; 表示程序正常结束。代码中的符号必须使用英文字符，C++ 区分大小写，语句末尾需要分号。

> [!knowledge]
> ==🔴源文件与编译运行==
> - 源代码保存为 .cpp 后缀，例如 hello.cpp；应养成写几行就按 Ctrl+S 保存的习惯。
> - 路径不要含中文，例如 D:\code\hello.cpp；课件解释，这是因为 Dev-C++ 调用的部分命令行工具可能无法正确处理中文路径。建议建立专门代码文件夹，并为每周作业创建子文件夹。
> - Dev-C++ 的“编译”F9 只翻译并检查错误；“运行”F10 执行已编译程序；“编译运行”F11 一步完成。固定顺序是：**先保存，再编译，后运行。**
> ==🔴程序布局==
> - { 与 } 各自独占一行；语句按层次用 Tab 缩进；一行只写一条语句，每条语句以 ; 结尾。
> - 变量应先声明再使用。编译器未必在乎布局，但人需要读懂代码；课件说明作业中布局混乱可能被酌情扣分。
> ==🔴阅读编译报错==
> - 代码界面会标出错误位置，输出区给出具体信息；应从==第一处错误==开始改，因为后续多条错误可能由同一问题引起。
> - 报错行号可能是实际出错处的下一行。

> [!knowledge]
> ==🔴常见问题与排查==
>
> | 现象 | 课件给出的处理方式 |
> | --- | --- |
> | 窗口一闪而过 | 在 return 0; 前加入 system("pause"); |
> | 编译按钮是灰色 | 检查是否已保存，或是否新建了源代码文件 |
> | 出现奇怪错误 | 检查路径是否含中文、代码中是否误用中文标点 |
> | 报错很多 | 只修第一处并重新编译，许多错误会一并消失 |
> | 修改后结果不变 | 修改后必须重新编译再运行；F11 会自动完成 |
> - 常见报错关键词：expected（缺少）、before（在……之前）、undeclared（未声明）。

## 1.4 测试和调试

> [!knowledge]
> ==🔴测试与调试==
> - 程序中的错误称为 ==bug==；消除错误的过程称为 ==debug（调试）==。
> - ==测试==是用各种输入运行程序、检查输出是否正确。每写完一个程序，至少应测试正常数据、边界数据和故意“刁难”的数据各一组。
> - **程序能运行不等于程序正确。**
> ==🔴三种程序错误==
>
> | 类型 | 特征 | 课件示例／处理重点 |
> | --- | --- | --- |
> | 语法错误 | 违反语言规则，编译器能发现 | 漏分号、拼错单词；查看报错并修改 |
> | 运行时错误 | 编译通过，运行时才出错 | 如除以 $0$，程序可能中途崩溃或窗口消失 |
> | 逻辑错误 | 能正常运行但结果错误 | 如把 a+b 写成 a-b；最难发现，只能靠测试和读懂自己的代码 |

**[ 例题 ] 输出字符图案**

使用 cout、字符 'o' 和空格，在屏幕输出由 SYSU 四个字母组成的图案；每个字母由若干行字符拼出，形状接近即可。

解
1. 将图案按行拆分，每一行写一条 cout << "..." << endl; 语句。
2. 保留字符串中的空格以决定字母间距；每行使用 endl 换行。

**[ 例题 ] 两数相加**

让用户输入两个数字，计算它们的和并输出；完成后可将运算改为相减、相乘，观察结果。

~~~cpp
#include <iostream>
using namespace std;

int main()
{
    int num1;
    int num2;
    int sum;
    cout << "Please input num1: ";
    cin >> num1;
    cout << "Please input num2: ";
    cin >> num2;
    sum = num1 + num2;
    cout << "Their sum is " << sum;
    return 0;
}
~~~

解
1. 声明两个输入变量 num1、num2 和保存结果的变量 sum。
2. 先用 cout 提示输入，再用 cin >> 分别读取两个数；计算 sum = num1 + num2;。
3. 输出结果。注意：cin 使用 >>，cout 使用 <<；方向写反是常见错误。

# 第2章：C++ 基础知识

## 2.1 变量和赋值

> [!knowledge]
> ==🔴变量与标识符==
> - C++ 的==变量==是内存位置的名称，可写入和修改其中的值。编译器为变量分配内存位置，用 $0$、$1$ 编码存储值；编程时通常关心变量名，而不必关心具体地址。
> - 变量中的值未必是有意义的初值；未初始化的变量可能保留不确定的旧值，因此不能直接使用。
> - 变量的名称称为==标识符==，应能反映数据含义。
> - 标识符首字符必须是字母或下划线，后续只能是字母、数字或下划线。3xchange、data-1、myfirst.c 不合法；sum、count、unitPrice、totalWeight、numOfCicles 合法且更具含义。
> ==🔴命名与关键字==
> - 例如班级人数可命名为 studentCount 或 numOfStudents，商品单价可命名为 price 或 unitPrice，是否及格可命名为 isPassed，第三次测量值可命名为 measurement3 或 N3rd_measurement。
> - int、double、if、else、while、return 等==关键字（保留字）==由语言预先定义，不能作变量名。
> - cin、cout 虽不是关键字，也应避免重定义；C++ 区分大小写，rate、RATE、Rate 是不同标识符。main、cin、cout 应全小写，变量通常也以小写字母开头。

> [!knowledge]
> ==🔴声明、赋值与初始化==
> - 每个变量均应==先声明，后使用==；声明告知编译器变量名称及其数据类型。int 用于整数，如 3、102、-456；double 用于小数，如 1.34、4.0、-345.6。
> - 可一次声明多个同类型变量，例如 double oneWeight, totalWeight;；也可在 main 开始处声明，或在首次使用前声明。
> - 赋值符号 = 表示动作而非数学等号。执行赋值时，先计算右侧表达式，再把结果放入左侧变量；左侧必须是被赋值变量。
> - 例如 totalWeight = oneWeight * numberOfBars; 读作“将 oneWeight 与 numberOfBars 的积赋给 totalWeight”。count = count + 2; 合法，它取旧 count 加 2 后再写回 count。
> - ==初始化==是声明变量时给它第一个值，例如 double mpg = 26.3, area = 0.0, volume; 或 double mpg(26.3), area(0.0), volume;。两种写法等价；其中 volume 仍未初始化。

## 2.2 输入和输出

### 2.2.1 流、预处理指令与输出

> [!knowledge]
> ==🔴数据流==
> - ==流==是一串数据字符；程序关注字符序列本身，而不关心其具体来源或去向。
> - 键盘经输入流 cin 进入程序，程序经输出流 cout 到显示器。输入还可来自文件，输出还可写至文件或打印机；相同的 >>、<< 语法可在这些媒介间复用，这就是流抽象的好处。
> ==🔴iostream 与命名空间==
> - 程序开头通常写入 #include <iostream> 和 using namespace std;。
> - #include <iostream> 将 iostream 库包含进程序，使 cin、cout 有定义；它相当于将该文件内容纳入程序。
> - cin、cout 的完整名称是 std::cin、std::cout。using namespace std; 允许本课程的小程序省略 std::；命名空间用于组织名称、降低不同代码之间的命名冲突。
> ==🔴cout 输出==
> - << 称为==插入运算符==，把数据插入输出流。cout << numberOfBars << " candy bars\n"; 先输出变量值，再输出字符串。
> - 每个输出项前都写 <<，两个 < 中不可插空格；整条输出语句以一个分号结束。字符串中的空格必须显式写出，计算机不会自动补空格。
> - 字符串用双引号，例如 "Walter"；单个字符用单引号，例如 'W'。输出表达式时可加括号以便阅读，例如 cout << "Total cost is $" << (price + tax);。
> - 逻辑上相关的一组输出宜放在同一条 cout 中；语句可在适合插入空格的位置换行，但引号内字符串不可断行。

> [!knowledge]
> ==🔴转义与换行==
>
> | 转义序列 | 含义 |
> | --- | --- |
> | \n | 换行 |
> | \t | 制表符，用于对齐 |
> | \\ | 一个实际反斜杠 |
> | \" | 一个实际双引号 |
> | \a | 响铃 |
> - 转义序列告诉编译器按特殊符号处理后续字符；应使用标准写法，不能随意在反斜杠后添加字母。
> - cout << "\n"; 与 cout << endl; 都可换行：\n 必须在字符串内，endl 不加引号。能并入字符串时用 \n，独立换行时推荐 endl；程序结束前应输出换行，以免不同环境遗漏末行或把下次输出接在同一行。

**[ 例题 ] 按两位小数输出价格**

课件给出 price1 = 78.5、price2 = 78.512588663，要求输出时固定保留两位小数。

~~~cpp
#include <iostream>
using namespace std;

int main()
{
    double price1 = 78.5;
    double price2 = 78.512588663;

    cout.setf(ios::fixed);
    cout.precision(2);

    cout << "The price1 is $" << price1 << endl;
    cout << "The price2 is $" << price2 << endl;
    return 0;
}
~~~

解
1. cout.setf(ios::fixed); 指定使用固定小数形式，而不是科学计数法。
2. cout.precision(2); 设定精度为 2；与 fixed 结合时，表示小数点后显示两位。
3. 之后所有 double 输出均保留两位；若要改为五位小数，将精度改为 5。课件指出这些写法涉及对象和成员函数，目前先按其格式使用。

### 2.2.2 使用 cin 输入与设计交互

> [!knowledge]
> ==🔴cin 输入==
> - >> 称为==提取运算符==，把输入流中的值读入变量。终端通常在用户输入一行并回车后按需要读取，数据不足时程序等待。
> - 例如 cin >> numberOfBars; cin >> oneWeight; 会依次读取两个值。
> - cin >> v1 >> v2 >> v3; 可连续读取三个数据；数据可用空格或换行分隔。cin 会跳过任意多个空白，输入 125 会作为一个数 125，而不是 12 和 5。
> - 回车产生的换行符留在流中，下一次常规 cin 读取时会被跳过。
> ==🔴输入输出设计==
> - 每个 cin 前应给出提示语，否则用户不知道应输入什么。
> - 提示语末尾通常不换行，使输入与提示在同一行；读入后回显值，以核对程序实际读取的内容。
> - I/O 是用户能直接看到的部分，应作为程序界面认真设计。

**[ 例题 ] 读取包装数量和单件重量**

课件示例读取一包糖的数量和单件盎司重量，并回显用户输入。

~~~cpp
#include <iostream>
using namespace std;

int main()
{
    int numberOfBars, oneWeight;
    cout << "Enter the number of bars in a package ";
    cout << "and the weight in ounces of one bar.\n";
    cin >> numberOfBars;
    cin >> oneWeight;
    cout << "Your inputs are: " << numberOfBars
         << " and " << oneWeight << endl;
    return 0;
}
~~~

解
1. 先输出输入提示，再连续读入 numberOfBars、oneWeight。
2. 输入可以分行或以空格分隔；最后回显两个读取结果。

## 2.3 数据类型和表达式

### 2.3.1 数值、字符和字符串

> [!knowledge]
> ==🔴int 与 double==
> - 数学上 2 和 2.0 相同，但 C++ 中 2 是 int，2.0 是 double。int 精确存储整数；double 近似存储、约有 15 位有效数字，可表示含小数点或不含小数点的数。
> - 确定为整数时使用 int；有小数、或结果可能需要小数时使用 double。int 最大约为 21 亿，double 范围约为 $10^{\pm308}$。
> - double 的普通写法应带小数点，例如 34.1、23.0034、1.0；科学记数法如 $3.41\mathrm{e}1=3.41\times10^1$、$5.89\mathrm{e}{-6}=5.89\times10^{-6}$。e 后指数为正时小数点右移、为负时左移；C++ 数字中不能写逗号，1000000 不能写成 1,000,000。
> ==🔴其他数值类型==
>
> | 类型 | 课件列出的典型占用 | 范围／精度（约） |
> | --- | --- | --- |
> | short | 2 字节 | $\pm32767$ |
> | int | 4 字节 | $\pm2147483647$ |
> | long | 4 字节 | $\pm2147483647$ |
> | float | 4 字节 | $10^{\pm38}$，7 位有效数字 |
> | double | 8 字节 | $10^{\pm308}$，15 位有效数字 |
> | long double | 10 字节 | $10^{\pm4932}$，19 位有效数字 |
> - 更大范围或更高精度通常需要更多字节。本课程主要使用 int 和 double；不同系统的类型大小可能不同，可用 sizeof(int) 查看。

> [!knowledge]
> ==🔴char 与 string==
> - char 存储键盘上的单个字符，例如 char letter = 'a';；字符在内存中存为编码数字，ASCII 中 'A' 为 65、'a' 为 97。字符常量使用成对单引号。
> - 'a' 是字符常量，而 "a" 是文本；char 适合英文字符、数字和常见符号，不能表示中文。
> - string 表示由多个字符组成的文本，即使文本只有一个字符也可使用，例如 string name = "张三";。使用 string 时可在顶部加入 #include <string>。
> - string 是一个类，将在第 8 章细讲。string 对象可以用 + 拼接，例如 string s = string("Hello") + "World";；"Hello" + "World" 不能直接拼接，因为两侧均不是 string 对象。
> - cin 读取 char 时会跳过空白和换行；输入 A B 或 AB，依次读入两个 char 都可得到 'A'、'B'。cin 读取 string 遇到空格即停止；整行读取在第 8 章介绍 getline。

### 2.3.2 类型兼容性与算术表达式

> [!knowledge]
> ==🔴类型兼容性==
> - 一般应把值存入相同类型的变量。将 2.99 赋给 int，结果只会是 2；有些编译器会报错，有些会默许并可能警告。
> - int 赋给 double 是安全转换，如 $2\rightarrow2.0$；double 赋给 int 会丢弃小数部分，如 $2.99\rightarrow2$。
> - char 与 int 可互相赋值，因为 char 内部保存编码，例如 int value = 'A'; 得 65，char letter = 65; 得 'A'；但这会降低可读性，不推荐。
> - bool 与 int 也能互通：true 存为 1，false 存为 0；非零整数赋给 bool 得 true，0 得 false。
> ==🔴算术运算符==
> - +、-、*、/、% 分别表示加、减、乘、除、取余；% 只用于整数。操作数可为变量、常量或更复杂表达式。
> - % 可用于判断偶数 n % 2 == 0、取个位 n % 10，以及每 7 天一循环等场景。整数除法中 / 得商、% 得余数；课件以非负整数为主，除数不能为 0。
> - 两个 int 运算的结果仍为 int；只要有一个运算数是 double，结果为 double。规则取决于运算符两侧类型，而不是最终赋值的变量类型：double x = 5 / 2; 中，x 得到 2。

**[ 例题 ] 整数除法、小数除法与余数**

~~~cpp
cout << "6 / 2 : " << 6 / 2 << endl;
cout << "7 / 2 : " << 7 / 2 << endl;
cout << "7.0 / 2 : " << 7.0 / 2 << endl;
cout << "7 / 2.0 : " << 7 / 2.0 << endl;
cout << "17 % 5 : " << 17 % 5 << endl;
~~~

解
1. 6 / 2 的结果为 3；7 / 2 的两个操作数均为 int，结果为 3，小数部分被丢弃。
2. 7.0 / 2 与 7 / 2.0 均有 double 参与，结果均为 3.5。
3. 17 % 5 的结果为 2，即 17 除以 5 的余数。

**[ 例题 ] 将日期映射到星期**

假设本月 1 日是星期一。课件用 day1 = 1、day7 = 7 验证余数与星期编号的映射。

解
1. 直接用 day % 7 时，1 % 7 为 1，但 7 % 7 为 0，编号范围会是 0–6。
2. 若希望星期编号保持 1–7，则使用 (day - 1) % 7 + 1；这样 day1 得 1，day7 得 7。

> [!knowledge]
> ==🔴运算顺序与括号==
> - 优先级与通常代数相同：先 *、/、%，后 +、-；x + y * z 先乘，(x + y) * z 先加。拿不准时加小括号。
> - 数学式 $b^2-4ac$ 写作 b*b - 4*a*c；$x(y+z)$ 写作 x*(y+z)；$\frac{1}{x^2+x+3}$ 写作 1.0/(x*x + x + 3)；$\frac{a+b}{c-d}$ 写作 (a + b)/(c - d)。
> - C++ 只有小括号，数学中的 [ ] 与 { } 有其他用途；涉及除法时，应确保使用 double，例如 1.0*x*(y + z)。
> ==🔴整数除法陷阱与复合赋值==
> - 两次考试 85、86 分的平均值不能写作 (score1 + score2) / 2 后再赋给 double，因为整数除法先得到 85；应写为 (score1 + score2) / 2.0，得到 85.5。此类错误常不报错，却会悄悄使结果不准确。
> - 复合赋值：count += 2 等价于 count = count + 2；total -= discount、bonus *= 2、time /= rushFactor、change %= 100 同理。
> - amount *= cnt1 + cnt2 等价于 amount = amount * (cnt1 + cnt2)，右侧表达式作为整体参与运算。

## 2.4 简单的控制流程

> [!knowledge]
> ==🔴控制流程==
> - 前文的语句默认按顺序执行；从本节起，程序可根据条件选择不同代码，或重复执行相似任务。
> - ==分支语句==包括 if、if-else，按条件决定执行哪段代码；==循环语句==包括 while、do-while，重复执行一段代码。
> ==🔴if-else==
> - if (布尔表达式) 后接“条件为真时执行”的语句；若还要处理条件为假时的情况，使用 else。
> - 每个分支若只有一条语句，可以省略 { }；若有多条语句，必须用 { } 包成复合语句。else 可以省略，表示条件不满足时什么也不做、继续执行后续语句。
> - 布尔表达式必须放在圆括号内。if (hours > 40) 这一行末尾不能写分号，否则 if 控制的是一个空语句，逻辑会出错。

**[ 例题 ] 用 if-else 计算加班工资**

规则：40 小时以内按时薪 rate 计算；超过 40 小时的部分按 $1.5$ 倍时薪计算。

解
1. 不能无条件使用 grossPay = rate*40 + 1.5*rate*(hours-40);，因为 hours 为 10 时会得到负数工资。
2. 条件为 hours > 40 时，计算 grossPay = rate * 40 + 1.5 * rate * (hours - 40);。
3. 否则，计算 grossPay = rate * hours;。课件示例输入 rate 为 10、hours 为 41，结果为 $415.00$。

> [!knowledge]
> ==🔴比较与逻辑表达式==
> - 比较表达式的结果只有 true 或 false。常用比较有 hours > 40、score >= 60、x == y、x != y。
> - >=、<= 各是两个字符；== 才表示相等比较，= 表示赋值；!= 表示不相等。
> - 逻辑与 && 要求两侧都真，例如 (x > 2) && (x < 7)；逻辑或 || 至少一侧为真，例如 (x == 1) || (x == y)；逻辑非 ! 反转真假，例如 !(x == y)。
> - 一个判断中每个比较都要独立写出：(x < y) && (y < z)，不能写成 x < y < z。后者先计算 x < y，得到的 true／false 会转换为 1／0 再参与比较。
> - ==短路求值==：A && B 中 A 为假时不再计算 B；A || B 中 A 为真时不再计算 B。可用 if (b != 0 && a / b > 2) 先检查 b 非零，从而避免除零。
> ==🔴复合语句==
> - { } 将多条语句组成一条==复合语句==，可放在需要“一条语句”的任何位置。
> - 忘记 { } 时，if 只控制紧随其后的第一条语句，其余语句按顺序执行，常导致逻辑错误。

> [!knowledge]
> ==🔴while 循环==
> - while 的流程为：检查条件 $\rightarrow$ 条件为真则执行循环体 $\rightarrow$ 再检查条件。它是“先判断、后执行”，条件一开始为假时循环体执行 0 次。
> - while (...) 行末不能加分号，否则循环体会成为空语句。
> - 写循环时要明确==退出条件==。例如倒数计数器每次减 1，才能最终退出；若每次使 x 加 2，从 11 跳到 13，却以 x == 12 作为退出判断，就不能正常结束。若目标是输出小于 12 的奇数，应使用 x < 12。
> - 程序陷入死循环时，可按 Ctrl+C 强制终止。
> ==🔴do-while 与递增／递减==
> - do-while 先执行循环体、再检查条件，故循环体==至少执行一次==；while 则可能一次也不执行。
> - do-while 的语法在结尾写作 } while (...);，末尾必须有分号。
> - x = x + 1; 可简写为 x++；x = x - 1; 可简写为 x--。

## 2.5 程序的风格

> [!knowledge]
> ==🔴为什么需要程序风格==
> - 良好的程序风格使代码==易阅读、易纠正、易修改==。程序既写给编译器，也写给将来的自己和合作者。
> ==🔴缩进与代码块==
> - 逻辑相关的代码应使用相同缩进（如按 Tab）。{ } 创建代码块；若采用“括号各自独占一行”的风格，应前后一致。
> - 开括号独占一行与跟在前一行末尾均可；关键是选择一种风格并保持一致。
> ==🔴注释==
> - // 表示单行注释，编译器忽略该行中 // 之后的内容；/* ... */ 表示可跨多行的注释。
> - 注释是写给人的解释，应放在重要且不直观的地方；逐行解释显而易见的语句反而会掩盖代码结构。
> ==🔴具名常量与命名==
> - 有含义的固定值可用 const 命名，例如 const double PI = 3.1415926;、const int REGULAR_HOURS = 40;、const double OVERTIME_FACTOR = 1.5;。
> - const 必须在定义时赋值，之后不能再由赋值语句修改。规则变动时，修改其定义值并重新编译。
> - 全大写加下划线是 C++ 常见命名约定，并非语法要求。
> - 本课程推荐==骆驼式（camelBack）==，如 numberOfBars、totalWeight：首词小写，后续单词首字母大写。下划线式 number_of_bars 也常见；匈牙利式 iCount、strName 把类型写进名字，多见于大型项目。

**[ 练习 ] 整数除法与余数**

输入两个 0–10000 的整数 a、b。若 b 为 0，输出“除数不能为 0”；否则输出整数商和余数。至少测试 17 5、5 17、17 0，并写出预期结果。

~~~cpp
#include <iostream>
using namespace std;

int main()
{
    int a = 0;
    int b = 0;
    cout << "Enter a and b (0-10000): ";
    if (!(cin >> a >> b))
    {
        cout << "Input error." << endl;
        return 0;
    }

    if (b == 0)
    {
        cout << "The divisor cannot be zero." << endl;
    }
    else
    {
        cout << "Quotient: " << a / b << endl;
        cout << "Remainder: " << a % b << endl;
    }
    return 0;
}
~~~

解
1. 先读取 a、b；若输入流读取失败，输出 Input error. 并结束程序。
2. 只有 b 不为 0 时才执行除法和取余，以避免除零。
3. 17 5 的商、余数为 3、2；5 17 为 0、5；17 0 输出 The divisor cannot be zero.。

**[ 练习 ] 用 while 求和**

输入整数 N。若 $1\le N\le100$，用 while 计算 $1+2+\cdots+N$ 并输出；否则提示超出范围、不计算。

~~~cpp
#include <iostream>
using namespace std;

int main()
{
    int n = 0;
    cout << "Enter N (1-100): ";
    if (!(cin >> n))
    {
        cout << "Input error." << endl;
        return 0;
    }

    if (n < 1 || n > 100)
    {
        cout << "Out of range." << endl;
    }
    else
    {
        int i = 1;
        int sum = 0;
        while (i <= n)
        {
            sum = sum + i;
            i = i + 1;
        }
        cout << "Sum = " << sum << endl;
    }
    return 0;
}
~~~

解
1. 用 n < 1 || n > 100 拦截范围外输入。
2. 范围内令 i 从 1 开始，只要 i <= n 就累加到 sum，并将 i 加 1；i 的变化保证循环终止。

**[ 练习 ] 判断闰年**

输入 1–9999 的年份：能被 400 整除则为闰年；否则能被 100 整除则不是闰年；否则能被 4 整除则为闰年；其余不是闰年。检验 2023（否）、2024（是）、1900（否）、2000（是）。

~~~cpp
#include <iostream>
using namespace std;

int main()
{
    int year;

    cout << "Enter a year (1-9999): ";
    cin >> year;

    if ((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0)))
    {
        cout << year << " is a leap year." << endl;
    }
    else
    {
        cout << year << " is not a leap year." << endl;
    }

    return 0;
}
~~~

解
1. 将“能被 400 整除”与“能被 4 整除且不能被 100 整除”用 || 合并。
2. 因此 2023、1900 输出 not a leap year.；2024、2000 输出 is a leap year.。

# 第3章：更多的流程控制

## 3.1 使用布尔表达式

> [!knowledge]
> ==🔴逻辑运算的真值==
>
> | A | B | A && B | A \|\| B | !A |
> | --- | --- | --- | --- | --- |
> | false | false | false | false | true |
> | false | true | false | true | true |
> | true | false | false | true | false |
> | true | true | true | true | false |
> - && 为逻辑与，只有两侧都为真才为真；|| 为逻辑或，至少一侧为真即为真；! 为逻辑非，反转一个布尔值。
> ==🔴运算符优先级==
>
> | 从高到低 | 运算符 | 示例 |
> | --- | --- | --- |
> | 最高 | ( ) | (a + b) |
> |  | 后置 ++、-- | i++、n-- |
> |  | 正号、负号、前置 ++、--、! | -a、++i、!flag |
> |  | *、/、% | a * b、a % b |
> |  | +、- | a + b、a - b |
> |  | <、>、<=、>= | a >= b |
> |  | ==、!= | a == b |
> |  | && | a > 0 && b > 0 |
> | 最低 | \|\| | a > 0 \|\| b > 0 |
> - 括号的优先级最高；复杂条件应主动加括号表达意图。

## 3.2 多路分支

### 3.2.1 嵌套 if-else 与 else if 链

> [!knowledge]
> ==🔴嵌套分支==
> - 一个 if 或 if-else 整体可视为一条语句，能嵌入另一个分支中。嵌套时用缩进展现层级，缩进虽不改变编译结果，却决定人能否读懂代码。
> - 嵌套写法 if (...) ... else if (...) ... 与将 if-else 放入 else 中的写法可等价。
> - 没有 { } 时，else 总是匹配它前面==最近的、尚未匹配的 if==。例如先判断 score 是否在 0–100，再写内层 if (score >= 90) 而不加大括号，后续 else 实际属于内层 if；输入 80 会错误输出 INVALID。应使用 { } 明确外层分支范围。
> ==🔴按区间分类的顺序==
> - 当分数已经确认在 0–100 内时，应从最高阈值向下判断：score >= 90 为 A；否则 score >= 80 为 B；否则 score >= 60 为 C；其余为 F。这样每个分数只输出一个等级。
> - 对于需验证范围的情况，先判断 score < 0 || score > 100，再进入等级分类；一次运行只输出一个结果。

**[ 例题 ] 验证并分类整数分数**

课件的三个连续任务依次要求：判断输入分数是否在 0–100 内；在有效范围内划分 A／B／C／F；再把有效性检查与四档分类合并。

~~~cpp
#include <iostream>
using namespace std;

int main()
{
    int score;
    cin >> score;

    if (score < 0 || score > 100)
    {
        cout << "INVALID" << endl;
    }
    else
    {
        if (score >= 90)
        {
            cout << "A" << endl;
        }
        else if (score >= 80)
        {
            cout << "B" << endl;
        }
        else if (score >= 60)
        {
            cout << "C" << endl;
        }
        else
        {
            cout << "F" << endl;
        }
    }
    return 0;
}
~~~

解
1. 有效性条件不成立时立即输出 INVALID，不进入任何等级分支。
2. 有效时按 90、80、60 由高到低测试；一旦前一条件成立，后续 else if 不再执行，保证只输出一个等级。

> [!knowledge]
> ==🔴Dev-C++ 常用快捷键==
>
> | 操作 | 快捷键 |
> | --- | --- |
> | 剪切／复制／粘贴 | Ctrl+X／Ctrl+C／Ctrl+V |
> | 保存 | Ctrl+S |
> | 撤销／重新应用 | Ctrl+Z／Ctrl+Y |
> | 增加／减少缩进 | Tab／Shift+Tab |
> | 注释／取消注释 | Alt+E+J／Alt+E+K |

**[ 例题 ] 分段计算税款**

费率：收入不超过 15000 不征税；15001–25000 的超出 15000 部分按 $5\%$；超过 25000 的部分按 $10\%$，且 15001–25000 段仍按 $5\%$。

~~~cpp
#include <iostream>
using namespace std;

int main()
{
    double income, tax;
    cin >> income;
    if (income < 0)
    {
        cout << "INVALID" << endl;
        return 0;
    }

    if (income <= 15000)
    {
        tax = 0;
    }
    else if (income <= 25000)
    {
        tax = (income - 15000) * 0.05;
    }
    else
    {
        tax = 10000 * 0.05 + (income - 25000) * 0.10;
    }

    cout.setf(ios::fixed);
    cout.precision(2);
    cout << tax << endl;
    return 0;
}
~~~

解
1. 三个收入区间互斥且覆盖非负收入；依次判断 income <= 15000、income <= 25000 即可。
2. 最后一档不能将全部收入乘 $10\%$，必须保留中间 10000 的 $5\%$ 税额。

### 3.2.2 switch、枚举与作用域

> [!knowledge]
> ==🔴switch 语句==
> - switch 是多路分支的另一种写法，适合按整数、字符或枚举值分类，常比嵌套 if-else 更清晰。
> - switch (控制表达式) 的各个 case／default 决定从哪里进入；break 决定何处离开。default 用于没有 case 匹配时的默认入口，通常放在最后，也可省略。
> - 若多个 case 要执行相同代码，可连续写多个 case 标签，再共享同一段语句和一个 break。

**[ 例题 ] 用 switch 解释等级字符**

输入等级字符：A/a 为 Excellent，B/b 为 Good，C/c 为 Pass，D/d 或 F/f 为 Need practice，其他字符为 Invalid grade。

~~~cpp
char grade;
cin >> grade;

switch (grade)
{
    case 'A':
    case 'a':
        cout << "Excellent" << endl;
        break;
    case 'B':
    case 'b':
        cout << "Good" << endl;
        break;
    case 'C':
    case 'c':
        cout << "Pass" << endl;
        break;
    case 'D':
    case 'd':
    case 'F':
    case 'f':
        cout << "Need practice" << endl;
        break;
    default:
        cout << "Invalid grade" << endl;
}
cout << "Done" << endl;
~~~

解
1. 课件先给出只响应大写字母的版本，后续为每个等级并列加入对应小写 case。
2. 每个实际处理分支末尾使用 break，以免继续落入下一分支；最后的 Done 在 switch 结束后执行。

> [!knowledge]
> ==🔴枚举类型==
> - ==枚举类型==的值等价于一系列整型常量，可提升程序可读性。例如 enum Weekday { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday };，随后可声明 Weekday today; 并赋值 today = Wednesday;。
> - 未指定数值时，枚举标识符从 0 开始连续赋值；因此 enum Direction { NORTH, SOUTH, EAST, WEST }; 等价于依次显式指定 $0,1,2,3$。
> - 也可部分指定数值，后续未指定项为前一值加 1。例如 enum MyEnum { ONE = 17, TWO, THREE, FOUR = -3, FIVE }; 中，TWO = 18、THREE = 19、FIVE = -2。
> - 枚举变量本质存储整数。课件用 enum Weekday { Mon, Tue, Wed, Thu, Fri, Sat, Sun }; 与 today = Wed; 演示，此时输出 today 得 2；switch 中让 Sat、Sun 输出“周末，不进实验室”，default 输出“工作日，进实验室”。
> ==🔴代码块与作用域==
> - { } 包围的复合语句是==语句块==；语句块可嵌套，但层级过深时宜用第 4 章的函数拆分。
> - 变量只在声明它的语句块内可用，这一可见范围称为==作用域==。
> - 若父块与子块声明同名变量，子块内使用子块变量；离开子块后恢复使用父块变量。以外层 char grade = '?';、内层 char grade = 'A'; 为例，输入 95 时，Inside 输出 A，Outside 输出 ?；内层声明不是给外层 grade 赋值。

**[ 练习 ] 简易计算器**

输入两个实数和一个运算符，顺序为“第一个数 运算符 第二个数”，如 8 / 4。支持 +、-、*、/；正常结果保留两位小数。除法的第二个数为 0 时输出“除数不能为0”，其他运算符输出“不支持的运算符”。

解（主动补全）

~~~cpp
#include <iostream>
using namespace std;

int main()
{
    double first, second;
    char op;
    cin >> first >> op >> second;

    cout.setf(ios::fixed);
    cout.precision(2);
    switch (op)
    {
        case '+':
            cout << first + second << endl;
            break;
        case '-':
            cout << first - second << endl;
            break;
        case '*':
            cout << first * second << endl;
            break;
        case '/':
            if (second == 0)
            {
                cout << "除数不能为0" << endl;
            }
            else
            {
                cout << first / second << endl;
            }
            break;
        default:
            cout << "不支持的运算符" << endl;
    }
    return 0;
}
~~~

1. 仅在 case '/' 中检查 second == 0，避免除零。
2. 固定小数输出设置在 switch 前，对四种正常运算都生效。

**[ 练习 ] 判断并分类三角形**

输入三个整数 a、b、c。先检查每条边是否在 1–1000；再判断能否构成三角形；最后输出“等边三角形”“等腰三角形”或“一般三角形”。每次只输出一种结果。

解（主动补全）

~~~cpp
#include <iostream>
using namespace std;

int main()
{
    int a, b, c;
    cin >> a >> b >> c;

    if (a < 1 || a > 1000 || b < 1 || b > 1000 || c < 1 || c > 1000)
    {
        cout << "边长超出范围" << endl;
    }
    else if (a + b <= c || a + c <= b || b + c <= a)
    {
        cout << "不能构成三角形" << endl;
    }
    else if (a == b && b == c)
    {
        cout << "等边三角形" << endl;
    }
    else if (a == b || a == c || b == c)
    {
        cout << "等腰三角形" << endl;
    }
    else
    {
        cout << "一般三角形" << endl;
    }
    return 0;
}
~~~

1. 先做范围检查，再判三角不等式，最后才分类，符合题目给定顺序。
2. 三边相等必须先于“任意两边相等”判断，否则等边三角形会被误归为等腰三角形。

## 3.3 C++ 循环语句详解

> [!knowledge]
> ==🔴while 与 do-while==
>
> | while | do-while |
> | --- | --- |
> | 先判断继续条件，再执行循环体 | 先执行循环体，再判断继续条件 |
> | 循环体可能一次也不执行 | 循环体至少执行一次 |
> | while (继续条件) { 循环体 } | do { 循环体 } while (继续条件); |
> - 两类循环都必须回答三个问题：每轮做什么、状态如何变化、何时停止。
> ==🔴前置与后置递增／递减==
>
> | 写法 | 变量变化 | 表达式取得的值 |
> | --- | --- | --- |
> | n++ | n 增加 1 | 增加前的值 |
> | ++n | n 增加 1 | 增加后的值 |
> | n-- | n 减少 1 | 减少前的值 |
> | --n | n 减少 1 | 减少后的值 |
> - 单独使用时，n++、++n 都使 n 加 1；当表达式还要使用该值时才有区别。

**[ 例题 ] 比较 n++ 与 ++n**

程序片段 A：int n = 2; int res = 2 * n++;
程序片段 B：int n = 2; int res = 2 * ++n;

解
1. 片段 A 中，n++ 先提供旧值 2 参与乘法，res 为 4，之后 n 变为 3；输出 n、res 即 3、4。
2. 片段 B 中，++n 先使 n 变为 3，再参与乘法，res 为 6；输出 3、6。
3. 两个片段结束时 n 都为 3，但 res 不同。

> [!knowledge]
> ==🔴for 循环==
> - 基本结构：for (初始化; 继续条件; 更新) { 循环体 }。
> - 初始化在开始时执行一次；之后反复“检查条件 $\rightarrow$ 执行循环体 $\rightarrow$ 更新”，条件为假时结束。for 头部的三部分用分号分隔。
> - 例如 for (int i = 1; i <= 3; i++) 依次输出 1、2、3。循环变量可以按任务更新：i += 2 可输出 1 3 5；从 i = 5 开始用 i-- 可输出 5 4 3 2 1。
> - 在 for 头部声明的 i 可用于条件、更新和循环体，但 for 结束后不可用。
> ==🔴while 与 for 的选择==
> - 两者均可计算 $1+2+\cdots+N$：while 将初始化、条件和更新分散在循环前／条件／循环体中；for 将三者集中到循环头。
> - 需要明确次数且“初始化—条件—更新”结构清晰时，for 更直接；终止方式不规则时可使用 while。
> ==🔴循环体、空语句与 break==
> - 循环体可是一条语句，也可是一组 { } 包围的语句。多条语句要一起重复，必须放进同一对 { }。
> - 单独的分号 ; 是==空语句==。for (int i = 1; i <= 3; i++); 后的 cout 不在循环体中，因此 Hello 只输出一次。
> - break 会立即结束==最近一层==循环或 switch，不会结束整个程序，也不会自动跳出所有外层循环；之后继续执行该循环后的语句。

**[ 例题 ] 最多三次猜数**

目标数为 7，最多输入三次。输入 7 时输出 Right 并立即停止；其他输入输出 Wrong；最后输出 Done。

~~~cpp
#include <iostream>
using namespace std;

int main()
{
    const int TARGET = 7;
    for (int attempt = 1; attempt <= 3; attempt++)
    {
        int guess;
        cin >> guess;
        if (guess == TARGET)
        {
            cout << "Right" << endl;
            break;
        }
        cout << "Wrong" << endl;
    }
    cout << "Done" << endl;
    return 0;
}
~~~

解
1. for 保证最多执行三轮。
2. 猜中后执行 break，跳出最近的 for；Done 位于循环后，仍会输出。

## 3.4 设计循环

> [!knowledge]
> ==🔴设计循环的检查项==
> - 开始前：哪些变量需要初值？
> - 每一轮：要完成什么工作？
> - 轮与轮之间：哪些状态会变化？
> - 何时停止：次数用完，还是出现结束信号？
> ==🔴按终止方式选择循环==
>
> | 结束依据 | 示例 | 常用循环 |
> | --- | --- | --- |
> | 次数用完 | 已知有 N 个成绩 | for |
> | 出现结束标记 | 输入 -1 表示没有下一项 | while |
> | 用户选择结束 | 每次处理后询问是否继续 | do-while |
> - 应先确定结束条件，再选择能自然表达该条件的循环。

**[ 例题 ] 固定人数的成绩统计**

输入人数 N（0–100），再输入 N 个整数成绩（均在 0–100 内）。输出总分和保留两位小数的平均分；N 为 0 输出 No data；N 超出范围输出 Invalid N 并结束。

~~~cpp
#include <iostream>
using namespace std;

int main()
{
    int n;
    cin >> n;
    if (n < 0 || n > 100)
    {
        cout << "Invalid N" << endl;
        return 0;
    }

    int sum = 0;
    for (int i = 1; i <= n; i++)
    {
        int score;
        cin >> score;
        sum += score;
    }

    if (n == 0)
    {
        cout << "No data" << endl;
    }
    else
    {
        cout.setf(ios::fixed);
        cout.precision(2);
        cout << "Sum = " << sum << endl;
        cout << "Average = " << 1.0 * sum / n << endl;
    }
    return 0;
}
~~~

解
1. 累加器 sum 在循环前初始化一次；循环中每次读一个成绩、累加一次。
2. 循环后先确认 n 不为 0，再计算平均分，避免除以 0。

**[ 例题 ] 以 -1 结束成绩统计**

不预先输入人数，连续输入整数成绩。0–100 为有效成绩，-1 是结束标记且不参与统计；有效成绩不超过 100 个，最后一定输入 -1。输出人数、总分和两位小数平均分；没有成绩时输出 No data。

~~~cpp
#include <iostream>
using namespace std;

int main()
{
    int sum = 0;
    int count = 0;

    while (true)
    {
        int score;
        cin >> score;
        if (score == -1)
        {
            break;
        }
        sum += score;
        count++;
    }

    if (count == 0)
    {
        cout << "No data" << endl;
    }
    else
    {
        cout.setf(ios::fixed);
        cout.precision(2);
        cout << "Count = " << count << endl;
        cout << "Sum = " << sum << endl;
        cout << "Average = " << 1.0 * sum / count << endl;
    }
    return 0;
}
~~~

解
1. 每轮先读入，再立刻检查 -1；只有不是结束标记才累加并计数。
2. 例如 80 100 -1 得 2 人、总分 180、平均 90.00；直接输入 -1 得 No data。

**[ 例题 ] 由用户控制的重复**

~~~cpp
char again;
do
{
    int score;
    cin >> score;
    cout << "Score = " << score << endl;
    cout << "Again? (y/n)\n";
    cin >> again;
} while (again == 'y' || again == 'Y');
cout << "Done\n";
~~~

解
1. do-while 保证至少处理一次成绩。
2. 每次处理完读 again；输入 y 或 Y 继续，n 或 N 结束。

> [!knowledge]
> ==🔴嵌套循环==
> - 嵌套循环是“循环内还有循环”。外层通常控制行数，内层控制当前行内容；每次外层进入新一轮，内层重新初始化。
> - 例如外层 row 从 1 到 3、内层 col 从 1 到 4，可输出 3 行、每行 4 个星号；内层完成一行后由外层输出换行。

**[ 例题 ] 打印星号矩形与直角三角形**

输入 N（1–9）。第一步打印 N 行、每行 4 个星号；第二步打印 N 行，第 row 行打印 row 个星号。N 超出范围时输出 Invalid N 并结束。课件还提出可设最大星号数 Max（如 9），使总输出星号数不超过 Max。

解
1. 矩形中，内层条件固定为 col <= 4；外层每轮结束后输出 endl。
2. 三角形中，内层条件改为 col <= row，得到第 1 行 1 个、第 2 行 2 个直至第 N 行 N 个星号：

~~~cpp
for (int row = 1; row <= n; row++)
{
    for (int col = 1; col <= row; col++)
    {
        cout << '*';
    }
    cout << endl;
}
~~~

3. 每一行都必须让 col 从 1 重新开始；换行置于内层循环之后。

> [!knowledge]
> ==🔴循环调试==
> - 不要只看最终答案；逐项检查：初值是否让第一轮处理到第一项、处理与更新顺序是否正确、最后一项是否遗漏或多做一次、每轮状态是否接近终止条件。
> - 使用小数据；必要时输出每轮变量值。

**[ 例题 ] 修正乘积循环**

目标计算 $2\times3\times4\times5=120$。原程序先将 next 加 1 再相乘，漏掉了 2。

~~~cpp
int next = 2;
int product = 1;
while (next <= 5)
{
    product *= next;
    next++;
}
cout << product << endl;
~~~

解
1. 每轮先乘入当前 next，再将其加 1，因此依次乘入 2、3、4、5。
2. 乘完 5 后 next 为 6，条件不满足；product 依次为 2、6、24、120。

**[ 例题 ] 判断整数是否为质数**

输入 $n$（1–1000）。质数大于 1，且正因数只有 1 和自身；输出 Prime 或 Not prime，范围外输出 Invalid 并结束。思路是依次检查 2 到 $n-1$ 是否有能整除 n 的数。

~~~cpp
#include <iostream>
using namespace std;

int main()
{
    int n;
    cin >> n;
    if (n < 1 || n > 1000)
    {
        cout << "Invalid" << endl;
        return 0;
    }

    bool prime = n > 1;
    for (int d = 2; d < n; d++)
    {
        if (n % d == 0)
        {
            prime = false;
            break;
        }
    }

    if (prime)
    {
        cout << "Prime" << endl;
    }
    else
    {
        cout << "Not prime" << endl;
    }
    return 0;
}
~~~

解
1. n = 1 时，prime 初值即为 false；n = 2 时循环不执行，仍为 true。
2. 如 n = 9，检查到因数 3 时将 prime 改为 false 并 break；若始终未发现因数，则保留 true。

# 第4章：函数

> [!knowledge]
> ==🔴本章结构==
> - 本章完整主题包括：4.1 自上而下设计、4.2 预定义函数、4.3 程序员自定义函数、4.4 过程抽象、4.5 作用域和局部变量、4.6 重载函数名称。
> - 本次课件实际覆盖 4.1–4.3；未在本笔记中预留尚未讲授的空章节。

## 4.1 自上而下设计

> [!knowledge]
> ==🔴自上而下设计（逐步细化）==
> - 先分解任务，再将各子任务细化到能够直接编写代码的步骤。
> - 例如计算购物应付金额可分为：读取商品数量和单价 $\rightarrow$ 计算应付金额 $\rightarrow$ 计算商品总价、按规则增加附加费 $\rightarrow$ 显示金额。
> - 具有明确用途的子任务可组织为函数。

## 4.2 预定义函数

> [!knowledge]
> ==🔴函数调用的组成==
> - 标准库提供可直接调用的函数。例如 double root = sqrt(9.0); 中，sqrt 是函数名，9.0 是==实参==，3.0 是==返回值==，该返回值用于初始化 root。
> - 使用 sqrt 需包含 #include <cmath> 并使用 using namespace std;。sqrt(9.0) 返回 3.0；屏幕显示仍由 cout 完成。
> - 调用格式为“函数名(实参1, 实参2, …)”。有返回值的调用可用于初始化、输出或参与计算，例如 double side = sqrt(area);、cout << sqrt(area) << '\n';、double perimeter = 4 * sqrt(area);。
> - 实参可以是常量、变量或计算表达式，如 sqrt(5.0 + 4.0)、pow(2.0, 3.0)；多个实参以英文逗号分隔。
> ==🔴常用数学函数==
>
> | 调用示例 | 值 | 含义 | 课件头文件 |
> | --- | --- | --- | --- |
> | sqrt(9.0) | 3 | 平方根 | <cmath> |
> | pow(2.0, 3.0) | 8 | $2$ 的 $3$ 次方 | <cmath> |
> | abs(-7) | 7 | 本例为整数绝对值 | <cstdlib> |
> | fabs(-3.5) | 3.5 | 浮点数绝对值 | <cmath> |
> | ceil(3.2) | 4 | 向正无穷方向取整 | <cmath> |
> | floor(3.8) | 3 | 向负无穷方向取整 | <cmath> |
> | round(3.2) | 3 | 就近取整 | <cmath> |
> - 因此 ceil(-3.2) 为 -3，floor(-3.2) 为 -4。

> [!info] 主动补充
> ==🔴cout 输出浮点数时保留两位小数==
> - 先包含 #include <iomanip>，再在输出浮点数之前设置：
>
> ~~~cpp
> cout << fixed << setprecision(2);
> ~~~
>
> - fixed 指定==固定小数形式==，避免以科学记数法输出；setprecision(2) 在 fixed 已生效时指定==小数点后恰好显示两位==。
> - 这两个设置会保留在 cout 的格式状态中，故只需设置一次，之后的浮点输出都会沿用，直到再次修改格式。它们只改变显示方式，不改变变量及计算结果本身。
> - 不使用 fixed 时，setprecision(2) 表示“保留 2 位有效数字”，而非两位小数；要稳定输出金额、长度等两位小数，两个操纵符应一起使用。
> - 函数返回值的类型决定是否出现 .00：sqrt、pow、fabs、ceil、floor 返回 double，因此 sqrt(16.0)、sqrt(16)、pow(2, 3)、ceil(5.1) 在上述设置后都会显示为 4.00、4.00、8.00、6.00；abs(3) 返回 int，仍显示为 3。
> - 表达式 pow(3.0, 2) / 2 与 pow(3.0, 2) / 2.0 均有 double 参与，均按两位小数输出 4.50；而 7 / abs(-2) 是整数除法，结果为 3。

**[ 例题 ] 由正方形面积计算边长和周长**

输入正方形面积 area。area 非负时输出边长与周长并保留两位小数；area 为负时输出 Invalid，且不执行开方。

~~~cpp
#include <iostream>
#include <cmath>
using namespace std;

int main()
{
    double area;
    cin >> area;
    if (area < 0)
    {
        cout << "Invalid" << endl;
    }
    else
    {
        double side = sqrt(area);
        double perimeter = 4 * side;
        cout.setf(ios::fixed);
        cout.precision(2);
        cout << "Side = " << side << endl;
        cout << "Perimeter = " << perimeter << endl;
    }
    return 0;
}
~~~

解
1. 先检查 area < 0，以免把负数传给平方根计算。
2. 有效时 side = sqrt(area)，perimeter = 4 * side；设置固定小数输出后显示结果。

> [!knowledge]
> ==🔴随机数函数==
> - rand() 产生从 0 到 RAND_MAX 的==伪随机==整数，包含两端。
> - srand 设置随机数种子，通常在程序开始处调用一次。包含 #include <cstdlib>、#include <ctime> 后，可在 main 开始处执行 srand(time(0));；time(0) 取得当前时间，本例以其作为种子。
> - 需要骰子点数时，int die = rand() % 6 + 1;：rand() % 6 产生 0–5，再加 1 得 1–6。
> ==🔴显式类型转换==
> - 写法 static_cast<目标类型>(表达式) 将表达式的值显式转换为目标类型。
> - double 转 int 时舍弃小数部分、向零截断：static_cast<int>(3.8) 得 3，static_cast<int>(-3.8) 得 -3。转换生成新结果，不改变原变量的值或类型。
> - int 转 double 时，转换位置决定结果。total = 9、people = 4 时：total / people 先做整数除法，double a 得 2；static_cast<double>(total) / people 得 2.25；static_cast<double>(total / people) 先得到整数 2 再转换，double c 仍得 2。

## 4.3 程序员自定义函数

> [!knowledge]
> ==🔴自定义函数==
> - 预定义函数来自标准库，例如 sqrt；==自定义函数==把自己的计算过程组织为函数，例如 totalCost。
> - 有返回值的函数必须明确函数名、返回值类型、参数类型与参数顺序。
> - 函数定义由==函数头==（返回值类型、函数名、形参列表）和==函数体==（实际处理过程）组成；通常将定义写在 main 外部。

**[ 例题 ] 用 totalCost 计算购物应付金额**

读取商品数量 number 和单价 price；二者均非负。商品总价为数量乘单价，应付金额在总价上增加 $5\%$ 附加费。main 负责输入输出，totalCost 接收数量、单价并返回应付金额。

~~~cpp
#include <iostream>
using namespace std;

double totalCost(int quantity, double price);

int main()
{
    int number;
    double price;
    cin >> number >> price;
    if (number < 0 || price < 0)
    {
        cout << "Invalid" << endl;
        return 0;
    }

    cout.setf(ios::fixed);
    cout.precision(2);
    cout << totalCost(number, price) << endl;
    return 0;
}

double totalCost(int quantity, double price)
{
    const double RATE = 0.05;
    double subtotal = quantity * price;
    return subtotal * (1 + RATE);
}
~~~

解
1. 函数定义的头部为 double totalCost(int quantity, double price)，表示返回 double，按顺序接收 int、double 两个形参。
2. 以 number = 2、price = 10.10 调用时，quantity 取得 2、price 取得 10.10，subtotal 为 20.20，return 的值为 21.21，main 中的结果变量可保存这一返回值。
3. 实参与形参按位置对应，变量名不必相同。

> [!knowledge]
> ==🔴return、声明与定义的位置==
> - return 结束本次函数调用，将返回值交给调用处。返回值可保存、显示或继续参与计算，例如 totalCost(2, 10.10) 可直接输出，也可与另一调用结果相加。
> - 函数声明只说明接口，末尾有分号而没有函数体：double totalCost(int quantity, double price);。声明中也可省略形参名：double totalCost(int, double);。
> - 调用发生前必须有可见的函数声明。将完整定义置于 main 前，定义本身即可提供声明；若完整定义在 main 后，则须先写函数声明。
> - ==值传递==中，形参取得实参的值；在函数内修改形参不会改变调用者的实参变量。
> - 自定义的计算／判断函数，每一条正常结束路径都应返回相应类型的值。

**[ 例题 ] 返回 bool 的字符判断函数**

~~~cpp
bool isDigit(char ch)
{
    return ch >= '0' && ch <= '9';
}

if (isDigit(c))
{
    cout << "Digit\n";
}
else
{
    cout << "Not digit\n";
}
~~~

解
1. isDigit 返回 true 或 false，可直接作为 if 条件。
2. 条件 ch >= '0' && ch <= '9' 同时限定字符编码位于数字字符区间。

**[ 例题 ] 将质数判断封装为函数**

输入 1–1000 的 n：范围外输出 Invalid；否则是质数输出 Prime，不是输出 Not prime。main 负责输入、范围检查和结果显示，isPrime 只返回判断结果。

~~~cpp
#include <iostream>
using namespace std;

bool isPrime(int n)
{
    if (n <= 1)
    {
        return false;
    }
    for (int d = 2; d < n; d++)
    {
        if (n % d == 0)
        {
            return false;
        }
    }
    return true;
}

int main()
{
    int n;
    cin >> n;
    if (n < 1 || n > 1000)
    {
        cout << "Invalid" << endl;
    }
    else if (isPrime(n))
    {
        cout << "Prime" << endl;
    }
    else
    {
        cout << "Not prime" << endl;
    }
    return 0;
}
~~~

解
1. 对 n > 2，若找到因数应立即 return false。
2. 不可在第一次“不能整除”时就 return true：例如 n 为 9 时，d = 2 不能整除，但 d = 3 可以整除。只有整个检查循环结束、仍未找到因数时，才能 return true。

**[ 例题 ] 根据成绩返回等级字符**

~~~cpp
char getGrade(int score)
{
    if (score >= 90)
    {
        return 'A';
    }
    else if (score >= 60)
    {
        return 'B';
    }
    else
    {
        return 'C';
    }
}
~~~

解
1. 输入 90 返回 'A'；输入 60 返回 'B'；输入 59 返回 'C'。
2. 函数的每条分支均以 return 结束，并返回 char 类型结果。
