package interview.projectInterview.Repository;

import interview.projectInterview.Models.NguoiDungTrongLop;
import interview.projectInterview.ViewDto.NguoiDungTrongLopViewDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface NguoiDungTrongLopRepository extends JpaRepository<NguoiDungTrongLop, Long> {
    @Query("SELECT new interview.projectInterview.ViewDto.NguoiDungTrongLopViewDto( " +
            "nd.id,nd.id, l.id,  nd.hoTen,l.maLop , l.tenLop, nd.diaChi , nd.gioiTinh, nd.role , nd.ngaySinh, ng.namhoc ) " +
            "FROM NguoiDungTrongLop ng " +
            "JOIN NguoiDung nd ON ng.nguoiDungId = nd.id " +
            "JOIN Lop l ON ng.lopId = l.id " +
            "WHERE l.id = :lopid AND ng.namhoc = :namhoc")
    Page<NguoiDungTrongLopViewDto> getNguoiDungTrongLopByNamHoc(@Param("namhoc") int namhoc, @Param("lopid") Long lopid , Pageable pageable);


    @Query("SELECT new interview.projectInterview.Models.NguoiDungTrongLop( " +
            "ng.id , ng.lopId , ng.nguoiDungId , ng.namhoc ) " +
            "FROM NguoiDungTrongLop ng " +
            "WHERE ng.nguoiDungId = :nguoidungid AND ng.namhoc = :namhoc")
    List<NguoiDungTrongLop> findByNamHocAndNguoiDungId(Long nguoidungid, int namhoc);
}
