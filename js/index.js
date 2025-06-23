window.onload = function() {
    // 导航栏切换
    document.getElementById('navbar-toggle').addEventListener('click', function() {
        const menu = document.querySelector('.navbar-menu');
        menu.classList.toggle('active');
    });

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });

                // 关闭移动端菜单
                const menu = document.querySelector('.navbar-menu');
                menu.classList.remove('active');
            }
        });
    });

    // 滚动动画
    const fadeElements = document.querySelectorAll('.fade-in');

    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkFade);
    checkFade(); // 初始检查

    // 图表1：2018-2023年中国二次元产业规模及增长率
    const chart1 = echarts.init(document.getElementById('chart1'));
    const option1 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        legend: {
            data: ['产业规模(亿元)', '增长率(%)']
        },
        xAxis: {
            type: 'category',
            data: ['2018', '2019', '2020', '2021', '2022', '2023']
        },
        yAxis: [{
            type: 'value',
            name: '产业规模(亿元)',
            min: 0,
            max: 1400,
            interval: 200
        }, {
            type: 'value',
            name: '增长率(%)',
            min: 0,
            max: 25,
            interval: 5
        }],
        series: [{
            name: '产业规模(亿元)',
            type: 'bar',
            data: [450, 620, 780, 930, 1080, 1200]
        }, {
            name: '增长率(%)',
            type: 'line',
            yAxisIndex: 1,
            data: [15, 18, 15, 12, 15, 18]
        }]
    };
    chart1.setOption(option1);

    // 图表2：2023年二次元细分市场规模占比
    const chart2 = echarts.init(document.getElementById('chart2'));
    const option2 = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['游戏', '动漫', '虚拟偶像', '衍生品', '线下活动', '其他']
        },
        series: [{
            name: '市场份额',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '18',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [{
                value: 480,
                name: '游戏'
            }, {
                value: 240,
                name: '动漫'
            }, {
                value: 200,
                name: '虚拟偶像'
            }, {
                value: 180,
                name: '衍生品'
            }, {
                value: 80,
                name: '线下活动'
            }, {
                value: 20,
                name: '其他'
            }]
        }]
    };
    chart2.setOption(option2);

    // 图表3：2018-2023年中国二次元用户规模及增长率
    const chart3 = echarts.init(document.getElementById('chart3'));
    const option3 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        legend: {
            data: ['用户规模(亿)', '增长率(%)']
        },
        xAxis: {
            type: 'category',
            data: ['2018', '2019', '2020', '2021', '2022', '2023']
        },
        yAxis: [{
            type: 'value',
            name: '用户规模(亿)',
            min: 0,
            max: 4,
            interval: 0.5
        }, {
            type: 'value',
            name: '增长率(%)',
            min: 0,
            max: 25,
            interval: 5
        }],
        series: [{
            name: '用户规模(亿)',
            type: 'bar',
            data: [1.8, 2.2, 2.6, 2.9, 3.1, 3.2]
        }, {
            name: '增长率(%)',
            type: 'line',
            yAxisIndex: 1,
            data: [15, 22, 18, 12, 7, 3]
        }]
    };
    chart3.setOption(option3);

    // 图表4：Z世代二次元消费品类占比
    const chart4 = echarts.init(document.getElementById('chart4'));
    const option4 = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c}%'
        },
        xAxis: {
            type: 'category',
            data: ['手办模型', '盲盒潮玩', '联名服饰', '漫画书籍', '游戏周边', '其他']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            name: '消费占比',
            data: [32, 25, 18, 12, 8, 5],
            type: 'bar',
            itemStyle: {
                color: '#7B61FF'
            }
        }]
    };
    chart4.setOption(option4);

    // 图表5：Z世代二次元消费频率分布
    const chart5 = echarts.init(document.getElementById('chart5'));
    const option5 = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c}%'
        },
        xAxis: {
            type: 'category',
            data: ['每周多次', '每月1-3次', '每季度1-2次', '每年1-2次', '很少消费']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            name: '消费频率',
            data: [22, 38, 25, 10, 5],
            type: 'bar',
            itemStyle: {
                color: '#4F46E5'
            }
        }]
    };
    chart5.setOption(option5);

    // 图表6：Z世代每月二次元消费金额分布
    const chart6 = echarts.init(document.getElementById('chart6'));
    const option6 = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c}%'
        },
        xAxis: {
            type: 'category',
            data: ['0-200元', '201-500元', '501-1000元', '1001-2000元', '2000元以上']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            name: '消费金额',
            data: [28, 35, 20, 12, 5],
            type: 'bar',
            itemStyle: {
                color: '#7B61FF'
            }
        }]
    };
    chart6.setOption(option6);

    // 图表7：二次元消费决策影响因素
    const chart7 = echarts.init(document.getElementById('chart7'));
    const option7 = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c}%'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['IP喜爱度', '产品质量', '价格', '社交影响', '品牌口碑', '限量稀缺性']
        },
        series: [{
            name: '影响因素',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '18',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [{
                value: 45,
                name: 'IP喜爱度'
            }, {
                value: 20,
                name: '产品质量'
            }, {
                value: 15,
                name: '价格'
            }, {
                value: 10,
                name: '社交影响'
            }, {
                value: 6,
                name: '品牌口碑'
            }, {
                value: 4,
                name: '限量稀缺性'
            }]
        }]
    };
    chart7.setOption(option7);

    // 图表8：2019-2023年中国虚拟偶像市场规模
    const chart8 = echarts.init(document.getElementById('chart8'));
    const option8 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        legend: {
            data: ['市场规模(亿元)']
        },
        xAxis: {
            type: 'category',
            data: ['2019', '2020', '2021', '2022', '2023']
        },
        yAxis: {
            type: 'value',
            name: '市场规模(亿元)',
            min: 0,
            max: 250,
            interval: 50
        },
        series: [{
            name: '市场规模(亿元)',
            type: 'bar',
            data: [30, 70, 120, 160, 200],
            itemStyle: {
                color: '#F97316'
            }
        }]
    };
    chart8.setOption(option8);

    // 图表9：2023年虚拟偶像商业变现渠道分布
    const chart9 = echarts.init(document.getElementById('chart9'));
    const option9 = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c}%'
        },
        xAxis: {
            type: 'category',
            data: ['直播带货', '品牌代言', '演唱会/活动', '内容创作', '周边产品', '其他']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            name: '变现渠道',
            data: [40, 25, 15, 10, 8, 2],
            type: 'bar',
            itemStyle: {
                color: '#F97316'
            }
        }]
    };
    chart9.setOption(option9);

    // 图表10：2023年AI二次元内容创作工具使用情况
    const chart10 = echarts.init(document.getElementById('chart10'));
    const option10 = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c}%'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['Stable Diffusion', 'Midjourney', 'DALL-E', '国产工具', '其他']
        },
        series: [{
            name: '使用情况',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '18',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [{
                value: 40,
                name: 'Stable Diffusion'
            }, {
                value: 30,
                name: 'Midjourney'
            }, {
                value: 15,
                name: 'DALL-E'
            }, {
                value: 10,
                name: '国产工具'
            }, {
                value: 5,
                name: '其他'
            }]
        }]
    };
    chart10.setOption(option10);

    // 图表11：2023年数字藏品市场规模及增长率
    const chart11 = echarts.init(document.getElementById('chart11'));
    const option11 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        legend: {
            data: ['市场规模(亿元)', '增长率(%)']
        },
        xAxis: {
            type: 'category',
            data: ['2020', '2021', '2022', '2023']
        },
        yAxis: [{
            type: 'value',
            name: '市场规模(亿元)',
            min: 0,
            max: 100,
            interval: 20
        }, {
            type: 'value',
            name: '增长率(%)',
            min: 0,
            max: 300,
            interval: 50
        }],
        series: [{
            name: '市场规模(亿元)',
            type: 'bar',
            data: [2, 20, 35, 50]
        }, {
            name: '增长率(%)',
            type: 'line',
            yAxisIndex: 1,
            data: [100, 900, 75, 43]
        }]
    };
    chart11.setOption(option11);

    // 图表12：二次元线下消费场景分布
    const chart12 = echarts.init(document.getElementById('chart12'));
    const option12 = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c}%'
        },
        xAxis: {
            type: 'category',
            data: ['漫展/展会', '主题餐厅', '周边店', '主题商场', '沉浸式展览', '其他']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            name: '消费场景',
            data: [35, 20, 18, 15, 8, 4],
            type: 'bar',
            itemStyle: {
                color: '#10B981'
            }
        }]
    };
    chart12.setOption(option12);

    // 图表13：2023年中国主要城市二次元线下消费指数
    const chart13 = echarts.init(document.getElementById('chart13'));
    const option13 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ['上海', '北京', '广州', '成都', '杭州', '深圳', '武汉', '南京', '重庆', '西安']
        },
        series: [{
            name: '消费指数',
            type: 'bar',
            data: [95, 88, 82, 78, 75, 72, 68, 65, 62, 60],
            itemStyle: {
                color: '#10B981'
            }
        }]
    };
    chart13.setOption(option13);

    // 图表14：2023年二次元主题展会规模及参与人次
    const chart14 = echarts.init(document.getElementById('chart14'));
    const option14 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        legend: {
            data: ['展会数量(场)', '参与人次(万)']
        },
        xAxis: {
            type: 'category',
            data: ['2019', '2020', '2021', '2022', '2023']
        },
        yAxis: [{
            type: 'value',
            name: '展会数量(场)',
            min: 0,
            max: 300,
            interval: 50
        }, {
            type: 'value',
            name: '参与人次(万)',
            min: 0,
            max: 1000,
            interval: 200
        }],
        series: [{
            name: '展会数量(场)',
            type: 'bar',
            data: [150, 80, 120, 180, 250]
        }, {
            name: '参与人次(万)',
            type: 'line',
            yAxisIndex: 1,
            data: [400, 200, 300, 500, 800]
        }]
    };
    chart14.setOption(option14);

    // 图表15：传统品牌二次元联名营销效果
    const chart15 = echarts.init(document.getElementById('chart15'));
    const option15 = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c}%'
        },
        xAxis: {
            type: 'category',
            data: ['品牌知名度提升', '产品销量增长', '社交媒体热度', '年轻用户占比提升', '品牌好感度提升']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            name: '营销效果',
            data: [85, 68, 92, 75, 70],
            type: 'bar',
            itemStyle: {
                color: '#10B981'
            }
        }]
    };
    chart15.setOption(option15);

    // 图表16：中国二次元产业未来五年预测
    const chart16 = echarts.init(document.getElementById('chart16'));
    const option16 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        legend: {
            data: ['产业规模(亿元)', '增长率(%)']
        },
        xAxis: {
            type: 'category',
            data: ['2023', '2024E', '2025E', '2026E', '2027E', '2028E']
        },
        yAxis: [{
            type: 'value',
            name: '产业规模(亿元)',
            min: 0,
            max: 3000,
            interval: 500
        }, {
            type: 'value',
            name: '增长率(%)',
            min: 0,
            max: 25,
            interval: 5
        }],
        series: [{
            name: '产业规模(亿元)',
            type: 'bar',
            data: [1200, 1500, 1875, 2344, 2930, 3662]
        }, {
            name: '增长率(%)',
            type: 'line',
            yAxisIndex: 1,
            data: [18, 25, 25, 25, 25, 25]
        }]
    };
    chart16.setOption(option16);

    // 图表17：2023年中国二次元内容出海地区分布
    const chart17 = echarts.init(document.getElementById('chart17'));
    const option17 = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c}%'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['东南亚', '日韩', '欧美', '中东', '其他']
        },
        series: [{
            name: '出海地区',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '18',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [{
                value: 40,
                name: '东南亚'
            }, {
                value: 25,
                name: '日韩'
            }, {
                value: 20,
                name: '欧美'
            }, {
                value: 10,
                name: '中东'
            }, {
                value: 5,
                name: '其他'
            }]
        }]
    };
    chart17.setOption(option17);

    // 图表18：2023年中国二次元IP全产业链开发价值分布
    const chart18 = echarts.init(document.getElementById('chart18'));
    const option18 = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c}%'
        },
        xAxis: {
            type: 'category',
            data: ['核心产品', '周边衍生', '线下体验', '授权收入', '数字资产', '其他']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            name: '价值分布',
            data: [45, 25, 15, 8, 5, 2],
            type: 'bar',
            itemStyle: {
                color: '#7B61FF'
            }
        }]
    };
    chart18.setOption(option18);

    // 响应式处理
    window.addEventListener('resize', function() {
        chart1.resize();
        chart2.resize();
        chart3.resize();
        chart4.resize();
        chart5.resize();
        chart6.resize();
        chart7.resize();
        chart8.resize();
        chart9.resize();
        chart10.resize();
        chart11.resize();
        chart12.resize();
        chart13.resize();
        chart14.resize();
        chart15.resize();
        chart16.resize();
        chart17.resize();
        chart18.resize();
    });



}