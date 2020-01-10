<el-input
        v-model="search1"
        size="mini"
        placeholder="Type to search"/>
<el-table
        ref="multipleTable"
        :data="tableData4.filter(data => !search1 || data.name.toLowerCase().includes(search1.toLowerCase()))"
        tooltip-effect="dark"
        :show-header="false"
        @selection-change="handleSelectionChange">
    <template slot="header" slot-scope="slot">
        <el-input
                v-model="search"
                size="mini"
                placeholder="Type to search"/>
    </template>
    <el-table-column
            type="selection"
            width="55"
            @click="clickItem">
    </el-table-column>
    <el-table-column
            label="日期"
            width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
            prop="name"
            label="姓名"
            width="120">
    </el-table-column>
    <el-table-column
            prop="address"
            label="地址"
            show-overflow-tooltip>
    </el-table-column>
</el-table>