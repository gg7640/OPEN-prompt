import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as c,c as i,e as t}from"./app-11321bb6.js";const a={},o=t('<h2 id="为什么要获得光猫超级密码" tabindex="-1"><a class="header-anchor" href="#为什么要获得光猫超级密码" aria-hidden="true">#</a> 为什么要获得光猫超级密码？</h2><p>它可以用于端口映射（eMule high ID）和桥接模式（路由器掌控拨号，但不兼容固定电话）。网上关于光猫超级密码的获取攻略大多是在 2012-14 年发布的，现在已经不能使用了。</p><h2 id="破解测试环境" tabindex="-1"><a class="header-anchor" href="#破解测试环境" aria-hidden="true">#</a> 破解测试环境</h2><p>运营商：上海电信 光猫型号：贝尔 E8-C-EPON 硬件版本：RG201O-CA_V1A2 软件版本：E201OCAA2V11S</p><h2 id="光猫超级密码破解" tabindex="-1"><a class="header-anchor" href="#光猫超级密码破解" aria-hidden="true">#</a> 光猫超级密码破解</h2><ol><li><p>地址栏输入 <code>192.168.1.1</code>，用户名：&lt;光猫背面&gt;，密码：&lt;光猫背面&gt;，登录管理界面。</p><figure><img src="https://pic1.zhimg.com/v2-9e43bc86b9095f3f6c2cfa4bd58dcd68_r.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>在浏览器地址栏输入 <code>192.168.1.1/backupsettings.txt</code>，将 <code>backupsettings.txt</code> 文件导出并备份在电脑上。如果无法打开，请改为输入 <code>192.168.1.1/backupsettings.conf</code>，并做好备份。</p></li><li><p>打开下载的 <code>backupsettings.txt</code> 或 <code>backupsettings.conf</code> 文件，搜索 <code>TeleComAccount</code>，两个 password 之间就是超级密码。超级账号是 <code>telecomadmin</code>。</p><figure><img src="https://pic3.zhimg.com/v2-ee441dd18cc8e5f6303fdaef82b6d476_r.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>输入地址 <code>192.168.1.1</code>，用刚获取的超级密码登录，然后可以进行端口映射和设备桥接。</p><figure><img src="https://pic1.zhimg.com/v2-31d6bb6b90be541c186a360fe2dd323c_r.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li></ol><p>如果新安装的光猫无法获取超级密码，可以使用运营商的官方应用进行映射。</p>',7),d=[o];function n(p,r){return c(),i("div",null,d)}const g=e(a,[["render",n],["__file","2017-10-18-light_cat_e8-c-epon_admin.html.vue"]]);export{g as default};
