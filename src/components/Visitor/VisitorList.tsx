import {
    Grid,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer, TableFooter,
    TableHead,
    TablePagination,
    TableRow
} from "@mui/material";
import {useListGuestBook} from "../../common/repository";
import {useState} from "react";

export const VisitorList = () => {
    const [ page, setPage ] = useState(0)
    const { isLoading, data: items } = useListGuestBook()
    const rowsPerPage = 5

    const count = items?.docs.length || 0

    const rows = isLoading ? (
        <TableRow><TableCell>불러오는 중...</TableCell></TableRow>
    ) : (
        items?.docs.map(v => (
                <TableRow key={v.id}>
                    <TableCell>{v.get("name")}</TableCell>
                    <TableCell>{v.get("message")}</TableCell>
                </TableRow>
            ))
        )

    return (
        <>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>이름</TableCell>
                            <TableCell>메세지</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                count={count}
                                page={page}
                                rowsPerPage={rowsPerPage}
                                onPageChange={(e, p)=>{
                                    setPage(p)
                                }}
                                rowsPerPageOptions={[5]}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </>
    )
}
